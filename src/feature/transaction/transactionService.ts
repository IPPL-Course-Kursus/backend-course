import midtransSnap from "../../utils/midtrans";
import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";

export class TransactionService {
  static async createTransaction(
    userId: string,
    courseId: string
  ): Promise<any> {
    if (!userId || !courseId) {
      throw new ErrorResponse("User ID and Course ID are required", 400, [
        "user_id",
        "course_id",
      ]);
    }
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        typeCourse: true,
      },
    });

    if (!course) {
      throw new ErrorResponse("Course not found", 400, ["course_id"]);
    }

    const user = await prisma.user.findUnique({
      where: { uid: userId },
    });

    if (!user) {
      throw new ErrorResponse(
        "User not found",
        400,
        ["user_id"],
        "USER_NOT_FOUND"
      );
    }

    const relatedCourseUser = await prisma.courseUser.findMany({
      where: { userId, courseId },
    });

    if (relatedCourseUser.length > 0) {
      throw new ErrorResponse("CourseUser already exists", 400, [
        "user_id",
        "course_id",
      ]);
    }

    let priceCourse = course.promoStatus
      ? course.courseDiscountPrice
      : course.coursePrice;

    let orderId = "";
    let ppn = 0.1 * priceCourse;
    let grossAmount = priceCourse + ppn;

    if (course.typeCourse.typeName === "Free") {
      await prisma.courseUser.create({
        data: {
          userId,
          courseId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      await prisma.transaction.create({
        data: {
          userId,
          courseId,
          courseName: course.courseName,
          orderId: `FREE-${Date.now()}`,
          ppn: 0,
          price: 0,
          totalPrice: 0,
          paymentStatus: "settlement",
          paymentMethod: "Free",
          linkPayment: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      return {
        success: true,
        message: "CourseUser created for free course",
      };
    }

    const existingTransaction = await prisma.transaction.findFirst({
      where: {
        userId,
        courseId,
        paymentStatus: "pending",
      },
    });

    if (existingTransaction) {
      return {
        success: true,
        data: {
          paymentUrl: existingTransaction.linkPayment,
          orderId: existingTransaction.orderId,
        },
      };
    }

    let isUnique = false;
    while (!isUnique) {
      const randomNumber = Math.floor(100000 + Math.random() * 90000);
      orderId = `ORDER-${Date.now()}${randomNumber}`;
      const existingTransaction = await prisma.transaction.findUnique({
        where: { orderId },
      });
      if (!existingTransaction) {
        isUnique = true;
      }
    }

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: Math.round(grossAmount),
      },
      item_details: [
        {
          id: courseId,
          price: Math.round(grossAmount),
          quantity: 1,
          name: course.courseName,
        },
      ],
      customer_details: {
        first_name: user.fullName,
        phone: user.phoneNumber,
      },
    };

    const transaction = await midtransSnap.createTransaction(parameter);

    const transactionData = await prisma.transaction.findFirst({
      where: { userId, courseId },
    });

    if (transactionData) {
      await prisma.transaction.update({
        where: { id: transactionData.id },
        data: {
          orderId: orderId,
          ppn: ppn,
          price: priceCourse,
          totalPrice: grossAmount,
          paymentStatus: "pending",
          paymentMethod: "snapMidtrans",
          linkPayment: transaction.redirect_url,
        },
      });
    }

    await prisma.transaction.create({
      data: {
        userId,
        courseId,
        courseName: course.courseName,
        orderId,
        ppn: ppn,
        price: priceCourse,
        totalPrice: grossAmount,
        paymentStatus: "pending",
        paymentMethod: "snapMidtrans",
        linkPayment: transaction.redirect_url,
      },
    });

    return {
      success: true,
      data: {
        paymentUrl: transaction.redirect_url,
        orderId: orderId,
      },
    };
  }

  static async handleSuccessPayment(order_id: string): Promise<any> {
    if (!order_id) {
      throw new ErrorResponse(
        "Invalid request, missing required parameters",
        400,
        ["order_id"]
      );
    }

    const data = await midtransSnap.transaction.status(order_id);

    await prisma.transaction.update({
      where: { orderId: order_id },
      data: {
        paymentStatus: data.transaction_status,
        paymentMethod: data.payment_type,
      },
    });

    if (data.transaction_status === "settlement") {
      const course = await prisma.transaction.findUnique({
        where: { orderId: data.order_id },
      });
      if (!course) {
        throw new ErrorResponse(
          "Transaction not found for the provided orderId",
          400,
          ["order_id"]
        );
      }
      const courseExists = await prisma.courseUser.findMany({
        where: { userId: course.userId, courseId: course.courseId },
      });
      if (courseExists.length > 0) {
        throw new ErrorResponse(
          "CourseUser already exists for the provided userId and courseId",
          400,
          ["user_id", "course_id"]
        );
      }
      await prisma.courseUser.create({
        data: {
          userId: course.userId,
          courseId: course.courseId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }
  }

  static async resumeTransaction(
    userId: string,
    order_id: string
  ): Promise<any> {
    if (!order_id) {
      throw new ErrorResponse(
        "Invalid request, missing required parameters",
        400,
        ["order_id"]
      );
    }

    if (!userId) {
      throw new ErrorResponse(
        "Invalid request, missing required parameters",
        400,
        ["user_id"]
      );
    }
    const transaction = await prisma.transaction.findUnique({
      where: { userId, orderId: order_id },
    });
    if (!transaction) {
      throw new ErrorResponse(
        "Transaction not found for the provided orderId",
        400,
        ["order_id"]
      );
    }

    return {
      success: true,
      data: {
        paymentUrl: transaction.linkPayment,
      },
    };
  }

  static async getAllTransactions(): Promise<any> {
    const transactions = await prisma.transaction.findMany();
    if (!transactions) {
      throw new ErrorResponse("No transactions found", 404, ["transactions"]);
    }
    return transactions;
  }
  static async getTransactionByUserId(userId: string): Promise<any> {
    if (!userId) {
      throw new ErrorResponse(
        "Invalid request, missing required parameters",
        400,
        ["user_id"]
      );
    }
    const transactions = await prisma.transaction.findMany({
      where: { userId },
      include: {
        course: {
          select: {
            image: true,
            courseName: true,
            user: {
              select: {
                fullName: true,
              },
            },
            category: {
              select: {
                categoryName: true,
              },
            },
            typeCourse: {
              select: {
                typeName: true,
              },
            },
            courseLevel: {
              select: {
                levelName: true,
              },
            },
            chapters: {
              select: {
                id: true,
                chapterTitle: true,
              },
            },
            totalDuration: true,
          },
        },
      },
    });

    if (!transactions) {
      throw new ErrorResponse("No transactions found", 404, ["transactions"]);
    }

    const transactionsWithTotalChapters = transactions.map((transaction) => ({
      ...transaction,
      totalChapters: transaction.course.chapters.length,
    }));

    return transactionsWithTotalChapters;
  }

  static async getTransactionByInstructorId(userId: string): Promise<any> {
    if (!userId) {
      throw new ErrorResponse(
        "Invalid request, missing required parameters",
        400,
        ["user_id"]
      );
    }

    const courses = await prisma.course.findMany({
      where: { userId },
      select: {
        id: true,
        courseName: true,
        category: {
          select: {
            categoryName: true,
          },
        },
        typeCourse: {
          select: {
            typeName: true,
          },
        },
        courseLevel: {
          select: {
            levelName: true,
          },
        },
        transaction: {
          select: {
            id: true,
            orderId: true,
            ppn: true,
            price: true,
            totalPrice: true,
            paymentStatus: true,
            paymentMethod: true,
            linkPayment: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (courses.length === 0) {
      throw new ErrorResponse("No courses found for the instructor", 404, [
        "instructor_id",
      ]);
    }

    const transactions = courses.flatMap((course) =>
      course.transaction.map((transaction) => ({
        courseId: course.id,
        courseName: course.courseName,
        categoryName: course.category?.categoryName,
        typeCourseName: course.typeCourse?.typeName,
        courseLevelName: course.courseLevel?.levelName,
        ...transaction,
      }))
    );

    if (transactions.length === 0) {
      throw new ErrorResponse("No transactions found for the instructor", 404, [
        "transactions",
      ]);
    }

    const transactionCountByType = transactions.reduce((acc, transaction) => {
      const typeName = transaction.typeCourseName || "Unknown";
      acc[typeName] = (acc[typeName] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const totalTransactions = transactions.length;

    return {
      transactions,
      transactionCountByType,
      totalTransactions,
    };
  }

  //   static async handleMidtransNotification(notificationData: any): Promise<any> {
  //     const notification = await midtransCoreApi.transaction.notification(
  //       notificationData
  //     );
  //     const { order_id, transaction_status } = notification;

  //     const updatedTransaction = await prisma.transaction.update({
  //       where: { orderId: order_id },
  //       data: { paymentStatus: transaction_status },
  //     });

  //     return {
  //       success: true,
  //       message: "Transaction updated successfully",
  //       data: updatedTransaction,
  //     };
  //   }
}
