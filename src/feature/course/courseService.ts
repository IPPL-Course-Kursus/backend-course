import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { UpdateCourseRequest, CreateCourseRequest } from "./courseModel";
import { imagekit } from "../../utils/image_kit";

export class CourseService {
  static async getAllCourses(): Promise<any> {
    return await prisma.course.findMany({
      where: {
        publish: "Published",
      },
      include: {
        user: true,
        courseLevel: true,
        typeCourse: true,
        category: true,
        _count: {
          select: {
            chapters: true,
          },
        },
      },
    });
  }

  // static async getCourseById(id: number): Promise<any> {
  //   return await prisma.course.findUnique({
  //     where: { id },
  //     include: {
  //       user: true,
  //       courseLevel: true,
  //       typeCourse: true,
  //       category: true,
  //     },
  //   });
  // }

  static async getCourseByCategory(categoryId: number): Promise<any> {
    return await prisma.course.findMany({
      where: {
        categoryId,
      },
      include: {
        user: true,
        courseLevel: true,
        typeCourse: true,
        category: true,
        _count: {
          select: {
            chapters: true,
          },
        },
      },
    });
  }

  static getCourseByLevel(levelId: number): Promise<any> {
    return prisma.course.findMany({
      where: {
        courseLevelId: levelId,
      },
      include: {
        user: true,
        courseLevel: true,
        typeCourse: true,
        category: true,
        _count: {
          select: {
            chapters: true,
          },
        },
      },
    });
  }

  static async getCourseByType(typeId: number): Promise<any> {
    return await prisma.course.findMany({
      where: {
        typeCourseId: typeId,
      },
      include: {
        user: true,
        courseLevel: true,
        typeCourse: true,
        category: true,
        _count: {
          select: {
            chapters: true,
          },
        },
      },
    });
  }

  static async getCourseBySearch(courseName: string): Promise<any> {
    return await prisma.course.findMany({
      where: {
        courseName: {
          contains: courseName,
          mode: "insensitive",
        },
        publish: "Published",
      },
      include: {
        user: true,
        courseLevel: true,
        typeCourse: true,
        category: true,
        _count: {
          select: {
            chapters: true,
          },
        },
      },
    });
  }

  static async getDetailCourse(courseId: number): Promise<any> {
    const courseDetail = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        chapters: {
          include: {
            _count: {
              select: { contents: true },
            },
          },
        },
      },
    });
    if (!courseDetail) {
      throw new Error("Course not found");
    }
    const totalContents = courseDetail.chapters.reduce((total, chapter) => {
      return total + (chapter._count.contents || 0);
    }, 0);

    const recommendedCourses = await prisma.course.findMany({
      where: {
        AND: [
          { id: { not: courseId } },
          { publish: "Published" },
          { categoryId: courseDetail.categoryId },
        ],
      },
      take: 10,
    });

    return {
      course: {
        ...courseDetail,
        totalContents,
      },
      recommendedCourses,
    };
  }

  static async createCourse(
    data: CreateCourseRequest,
    file: any,
    uid: string
  ): Promise<any> {
    const category = await prisma.category.findUnique({
      where: { id: data.categoryId },
      select: { categoryCode: true },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    let uniqueCourseCode: string;
    let isUnique = false;

    while (true) {
      const randomNumber = Math.floor(Math.random() * 10000);
      uniqueCourseCode = `${category.categoryCode}-${randomNumber}`;

      const existingCourse = await prisma.course.findUnique({
        where: { courseCode: uniqueCourseCode },
      });

      if (!existingCourse) {
        isUnique = true;
        break;
      }
    }

    let imageUrl: string = "";

    const validFileTypes = ["image/jpeg", "image/png"];

    if (file && validFileTypes.includes(file.mimetype)) {
      try {
        const result = await imagekit.upload({
          file: file.buffer,
          fileName: `${uniqueCourseCode}-${file.originalname}`,
          folder: "/course",
        });

        imageUrl = result.url;
      } catch (error) {
        console.error("Failed to upload image:", error);
        throw new ErrorResponse("Failed to upload image", 500, ["upload"]);
      }
    }

    await prisma.course.create({
      data: {
        categoryId: data.categoryId,
        courseLevelId: data.courseLevelId,
        typeCourseId: data.typeCourseId,
        userId: uid,
        courseCode: uniqueCourseCode,
        courseName: data.courseName,
        image: imageUrl,
        aboutCourse: data.aboutCourse,
        intendedFor: data.intendedFor,
        courseDiscountPercent: data.courseDiscountPercent,
        courseDiscountPrice: data.courseDiscountPrice,
        coursePrice: data.coursePrice,
        publish: data.publish,
        totalDuration: data.totalDuration,
      },
    });
  }

  static async updateCourse(
    id: number,
    data: UpdateCourseRequest,
    file?: any
  ): Promise<any> {
    const course = await prisma.course.findUnique({
      where: { id },
    });

    let imageUrl = course?.image;

    const validFileTypes = ["image/jpeg", "image/png"];

    if (file && validFileTypes.includes(file.mimetype)) {
      try {
        const result = await imagekit.upload({
          file: file.buffer,
          fileName: `${course?.courseCode}-${file.originalname}`,
          folder: "/course",
        });

        imageUrl = result.url;
      } catch (error) {
        console.error("Failed to upload image:", error);
        throw new ErrorResponse("Failed to upload image", 500, ["upload"]);
      }
    }

    await prisma.course.update({
      where: { id },
      data: {
        categoryId: data.categoryId,
        courseLevelId: data.courseLevelId,
        typeCourseId: data.typeCourseId,
        courseCode: data.courseCode,
        courseName: data.courseName,
        image: imageUrl,
        aboutCourse: data.aboutCourse,
        intendedFor: data.intendedFor,
        courseDiscountPercent: data.courseDiscountPercent,
        courseDiscountPrice: data.courseDiscountPrice,
        coursePrice: data.coursePrice,
        publish: data.publish,
        totalDuration: data.totalDuration,
      },
    });
  }

  static async deleteCourse(id: number): Promise<any> {
    await prisma.course.delete({
      where: { id },
    });
  }
}
