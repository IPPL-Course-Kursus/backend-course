import midtransSnap from "../../utils/midtrans";
import { prisma } from "../../application/database";
import { Transaction } from "./transactionModel";

export class TransactionService {
  static async createTransaction(
    userId: string,
    courseId: number
  ): Promise<any> {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        typeCourse: true,
      },
    });

    if (!course) {
      throw new Error("Course not found");
    }

    const user = await prisma.user.findUnique({
      where: { uid: userId },
    });

    if (!user) {
      throw new Error("User not found");
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

    let isUnique = false;
    while (!isUnique) {
      const randomNumber = Math.floor(10000 + Math.random() * 90000);
      orderId = `ORDER-${randomNumber}`;
      const existingTransaction = await prisma.transaction.findFirst({
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
          name: course.courseCode,
        },
      ],
      customer_details: {
        first_name: user.fullName,
        phone: user.phoneNumber,
      },
    };

    const transaction = await midtransSnap.createTransaction(parameter);

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
        token: transaction.token,
        paymentUrl: transaction.redirect_url,
      },
    };
  }

  static async handleSuccessPayment(order_id: string): Promise<any> {
    if (!order_id) {
      throw new Error("Invalid request, missing required parameters");
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
        throw new Error("Transaction not found for the provided orderId");
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

  static async getAllTransactions(): Promise<any> {
    const transactions = await prisma.transaction.findMany();
    if (!transactions) {
      throw new Error("No transactions found");
    }
    return transactions;
  }
  static async getTransactionByUserId(userId: string): Promise<any> {
    const transactions = await prisma.transaction.findMany({
      where: { userId },
      include: {
        course: {
          select: {
            image: true,
            courseName: true,
            userId: true,
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
              },
            },
            totalDuration: true,
          },
        },
      },
    });

    if (!transactions) {
      throw new Error("No transactions found");
    }

    const transactionsWithTotalChapters = transactions.map((transaction) => ({
      ...transaction,
      totalChapters: transaction.course.chapters.length,
    }));

    return transactionsWithTotalChapters;
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
