import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { UpdateCourseRequest, CreateCourseRequest } from "./courseModel";
import { imagekit } from "../../utils/image_kit";

export class CourseService {
  static async getAllCourses(): Promise<any> {
    const courses = await prisma.course.findMany({
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
      orderBy: {
        id: "asc",
      },
    });

    if (courses.length === 0) {
      throw new ErrorResponse("No courses found", 404);
    }

    return courses;
  }

  static async getCourseByUserId(userId: string): Promise<any> {
    const courses = await prisma.course.findMany({
      where: { userId },
      include: {
        user: true,
        courseLevel: true,
        typeCourse: true,
        category: true,
      },
    });

    if (courses.length === 0) {
      throw new ErrorResponse("No courses found for this user", 404);
    }

    return courses;
  }

  static async getCourseById(id: number): Promise<any> {
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        user: true,
        courseLevel: true,
        typeCourse: true,
        category: true,
      },
    });

    if (!course) {
      throw new ErrorResponse("Course not found", 404);
    }

    return course;
  }

  static async getCourseByCategory(categoryId: number): Promise<any> {
    const courses = await prisma.course.findMany({
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

    if (courses.length === 0) {
      throw new ErrorResponse("No courses found for this category", 404);
    }

    return courses;
  }

  static async getCourseByLevel(levelId: number): Promise<any> {
    const courses = await prisma.course.findMany({
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

    if (courses.length === 0) {
      throw new ErrorResponse("No courses found for this level", 404);
    }

    return courses;
  }

  static async getCourseByType(typeId: number): Promise<any> {
    const courses = await prisma.course.findMany({
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

    if (courses.length === 0) {
      throw new ErrorResponse("No courses found for this type", 404);
    }

    return courses;
  }

  static async getCourseBySearch(courseName: string): Promise<any> {
    const courses = await prisma.course.findMany({
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

    if (courses.length === 0) {
      throw new ErrorResponse(`No courses found matching "${courseName}"`, 404);
    }

    return courses;
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
      throw new ErrorResponse("Course not found", 404);
    }

    const totalContents = courseDetail.chapters.reduce((total, chapter) => {
      return total + (chapter._count.contents || 0);
    }, 0);

    const recommendedCourses = await prisma.course.findMany({
      where: {
        id: { not: courseId },
        publish: "Published",
        categoryId: courseDetail.categoryId,
      },
      include: {
        courseLevel: true,
        typeCourse: true,
        category: true,
        user: {
          select: {
            id: true,
            fullName: true,
          },
        },
        chapters: {
          include: {
            _count: {
              select: { contents: true },
            },
          },
        },
      },
      take: 10,
    });

    const recommendedCoursesWithTotal = recommendedCourses.map((course) => {
      const totalContents = course.chapters.reduce((total, chapter) => {
        return total + (chapter._count.contents || 0);
      }, 0);

      return {
        ...course,
        totalContents,
      };
    });

    return {
      course: {
        ...courseDetail,
        totalContents,
      },
      recommendedCourses: recommendedCoursesWithTotal,
    };
  }

  static async createCourse(
    data: CreateCourseRequest,
    file: any,
    uid: string
  ): Promise<any> {
    const existingCourse = await prisma.course.findFirst({
      where: { courseName: data.courseName },
    });

    if (existingCourse) {
      throw new ErrorResponse("Course already exists", 400);
    }
    const courseLevel = await prisma.courseLevel.findUnique({
      where: { id: data.courseLevelId },
    });

    if (!courseLevel) {
      throw new ErrorResponse("Course level not found", 404);
    }

    const typeCourse = await prisma.typeCourse.findUnique({
      where: { id: data.typeCourseId },
      select: { typeName: true },
    });

    if (!typeCourse) {
      throw new ErrorResponse("Type course not found", 404);
    }

    if (
      typeCourse.typeName === "Free" &&
      (data.coursePrice > 0 || data.courseDiscountPercent > 0)
    ) {
      throw new ErrorResponse("Free courses cannot have a price", 400);
    }

    const category = await prisma.category.findUnique({
      where: { id: data.categoryId },
      select: { categoryCode: true },
    });

    if (!category) {
      throw new ErrorResponse("Category not found", 404);
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
    let courseDiscountPrice: number | undefined;
    let promoStatus: boolean = false;

    if (file && validFileTypes.includes(file.mimetype)) {
      try {
        const result = await imagekit.upload({
          file: file.buffer,
          fileName: `${uniqueCourseCode}-${file.originalname}`,
          folder: "/Course",
        });

        imageUrl = result.url;
      } catch (error) {
        throw new ErrorResponse("Failed to upload image", 500, ["upload"]);
      }
    }

    if (data.courseDiscountPercent) {
      courseDiscountPrice =
        data.coursePrice -
        (data.coursePrice * data.courseDiscountPercent) / 100;
      promoStatus = true;
    } else {
      courseDiscountPrice = 0;
      promoStatus = false;
    }

    await prisma.course.create({
      data: {
        categoryId: data.categoryId,
        courseLevelId: data.courseLevelId,
        typeCourseId: data.typeCourseId,
        userId: uid,
        courseCode: uniqueCourseCode,
        courseName: data.courseName,
        image: imageUrl || data.image,
        aboutCourse: data.aboutCourse,
        intendedFor: data.intendedFor,
        courseDiscountPercent: data.courseDiscountPercent || 0,
        courseDiscountPrice: courseDiscountPrice,
        coursePrice: data.coursePrice || 0,
        promoStatus: promoStatus,
        publish: data.publish,
        certificateStatus: data.certificateStatus,
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

    if (!course) {
      throw new ErrorResponse("Course not found", 404);
    }

    let imageUrl = course.image;
    const validFileTypes = ["image/jpeg", "image/png"];
    let courseDiscountPrice: number | undefined;
    let promoStatus: boolean = false;
    let newCourseCode = course.courseCode;

    if (data.categoryId && data.categoryId !== course.categoryId) {
      const category = await prisma.category.findUnique({
        where: { id: data.categoryId },
        select: { categoryCode: true },
      });

      if (!category) {
        throw new ErrorResponse("New category not found", 404);
      }

      let isUnique = false;

      while (!isUnique) {
        const randomNumber = Math.floor(Math.random() * 10000);
        newCourseCode = `${category.categoryCode}-${randomNumber}`;
        const existingCourse = await prisma.course.findUnique({
          where: { courseCode: newCourseCode },
        });

        if (!existingCourse) {
          isUnique = true;
        }
      }
    }

    if (file && validFileTypes.includes(file.mimetype)) {
      try {
        const result = await imagekit.upload({
          file: file.buffer,
          fileName: `${newCourseCode}-${file.originalname}`,
          folder: "/course",
        });

        imageUrl = result.url;
      } catch (error) {
        throw new ErrorResponse("Failed to upload image", 500, ["upload"]);
      }
    }

    if (data.courseDiscountPercent) {
      courseDiscountPrice =
        data.coursePrice -
        (data.coursePrice * data.courseDiscountPercent) / 100;
      promoStatus = true;
    } else {
      courseDiscountPrice = undefined;
      promoStatus = false;
    }

    await prisma.course.update({
      where: { id },
      data: {
        categoryId: data.categoryId,
        courseLevelId: data.courseLevelId,
        typeCourseId: data.typeCourseId,
        courseCode: newCourseCode,
        courseName: data.courseName,
        image: imageUrl,
        aboutCourse: data.aboutCourse,
        intendedFor: data.intendedFor,
        courseDiscountPercent: data.courseDiscountPercent,
        courseDiscountPrice: courseDiscountPrice,
        coursePrice: data.coursePrice,
        promoStatus: promoStatus,
        publish: data.publish,
        certificateStatus: data.certificateStatus,
        totalDuration: data.totalDuration,
      },
    });
  }

  static async deleteCourse(id: number, uid: string): Promise<any> {
    const course = await prisma.course.findUnique({
      where: { id },
    });

    if (!course) {
      throw new ErrorResponse("Course not found", 404);
    }

    const relatedChapters = await prisma.chapter.findMany({
      where: { courseId: id },
    });

    if (relatedChapters.length > 0) {
      const chapterNames = relatedChapters
        .slice(0, 5)
        .map((chapter) => chapter.chapterTitle)
        .join(", ");
      throw new ErrorResponse(
        `Cannot delete type course: it is referenced by existing courses: ${chapterNames}.`,
        400
      );
    }

    if (course.userId !== uid) {
      throw new ErrorResponse(
        "You are not authorized to delete this course",
        403
      );
    }

    await prisma.course.delete({
      where: { id },
    });
  }

  static async getCoursesByFilter(
    typeId?: number,
    categoryId?: number,
    levelId?: number,
    promoStatus?: boolean
  ): Promise<any> {
    let whereClause: any = {
      publish: "Published",
    };

    if (typeId) {
      whereClause.typeCourseId = typeId;
    }

    if (categoryId) {
      whereClause.categoryId = categoryId;
    }

    if (levelId) {
      whereClause.courseLevelId = levelId;
    }

    if (promoStatus !== undefined) {
      whereClause.promoStatus = promoStatus;
    }

    const courses = await prisma.course.findMany({
      where: whereClause,
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

    if (courses.length === 0) {
      throw new ErrorResponse("No courses found for this filter", 404);
    }

    return courses;
  }

  static async countCoursesByType(): Promise<any> {
    const typeCourses = await prisma.typeCourse.findMany({
      select: {
        id: true,
        typeName: true,
      },
    });

    if (typeCourses.length === 0) {
      throw new ErrorResponse("No type courses found", 404);
    }

    const courseCounts: { [key: string]: number } = {};

    for (const typeCourse of typeCourses) {
      const count = await prisma.course.count({
        where: {
          typeCourseId: typeCourse.id,
          publish: "Published",
        },
      });

      courseCounts[typeCourse.typeName] = count;
    }

    return courseCounts;
  }

  static async getPopularCourses(): Promise<any> {
    const popularCourses = await prisma.courseUser.groupBy({
      by: ["courseId"],
      _count: {
        courseId: true,
      },
      orderBy: {
        _count: {
          courseId: "desc",
        },
      },
    });

    const courseIds = popularCourses.map((course) => course.courseId);
    const courses = await prisma.course.findMany({
      where: {
        id: {
          in: courseIds,
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

    if (courses.length === 0) {
      throw new ErrorResponse("No popular courses found", 404);
    }

    const result = courses.map((course) => {
      const count =
        popularCourses.find((p) => p.courseId === course.id)?._count.courseId ||
        0;
      return {
        ...course,
        purchaseCount: count,
      };
    });

    result.sort((a, b) => b.purchaseCount - a.purchaseCount);

    return result;
  }

  static async getAllCoursesByUserId(userId: string): Promise<any> {
    const allCourses = await prisma.course.findMany({
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

    const enrolledCourses = await prisma.courseUser.findMany({
      where: { userId: userId },
      select: {
        userId: true,
        courseId: true,
        contentFinish: true,
        courseStatus: true,
      },
    });

    const enrolledCourseIdsSet = new Set(
      enrolledCourses.map((enrolledCourse) => enrolledCourse.courseId)
    );

    const coursesWithEnrollmentStatus = allCourses.map((course) => {
      const enrolledCourse = enrolledCourses.find(
        (enrolled) => enrolled.courseId === course.id
      );

      return {
        ...course,
        isEnrolled: enrolledCourseIdsSet.has(course.id),
        contentFinish:
          enrolledCourse && enrolledCourseIdsSet.has(course.id)
            ? enrolledCourse.contentFinish
            : undefined,
        courseStatus:
          enrolledCourse && enrolledCourseIdsSet.has(course.id)
            ? enrolledCourse.courseStatus
            : undefined,
      };
    });

    if (coursesWithEnrollmentStatus.length === 0) {
      throw new ErrorResponse("No courses found", 404);
    }

    return coursesWithEnrollmentStatus;
  }
}
