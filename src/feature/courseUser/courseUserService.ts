import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { CreateCourseUserRequest } from "./courseUserModel";

export class CourseUserService {
  static async getCourseUser(uid: string): Promise<any> {
    if (!uid) {
      throw new ErrorResponse("userId is required", 400);
    }
    const courseUser = await prisma.courseUser.findMany({
      where: { userId: uid },
      include: {
        course: {
          select: {
            courseName: true,
            courseCode: true,
            image: true,
            aboutCourse: true,
            totalDuration: true,
            certificateStatus: true,
            category: {
              select: {
                categoryName: true,
              },
            },
            courseLevel: {
              select: {
                levelName: true,
              },
            },
            typeCourse: {
              select: {
                typeName: true,
              },
            },
          },
        },
      },
    });

    if (!courseUser) {
      throw new ErrorResponse("CourseUser not found", 404);
    }

    return courseUser;
  }

  static async startedCourseUser(
    courseUserId: number,
    chapterSort: number,
    contentSort: number
  ): Promise<any> {
    if (!courseUserId || !chapterSort || !contentSort) {
      throw new ErrorResponse(
        "courseUserId, chapterSort, and contentSort are required",
        400
      );
    }

    const startCourse = await prisma.courseUser.findFirst({
      where: { id: courseUserId },
      include: {
        course: {
          include: {
            chapters: {
              where: { sort: chapterSort },
              include: {
                contents: {
                  where: { sort: contentSort },
                  include: {
                    interpreter: true,
                    userContentProgress: {
                      where: { courseUserId: courseUserId },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!startCourse) {
      throw new ErrorResponse("Course not found for the given criteria", 404);
    }

    return startCourse;
  }

  static async getCourseUserDetail(id: number): Promise<any> {
    if (!id) {
      throw new ErrorResponse("id is required", 400);
    }
    const courseUser = await prisma.courseUser.findUnique({
      where: {
        id,
      },
      include: {
        course: {
          include: {
            chapters: {
              orderBy: { sort: "asc" },
              include: {
                contents: {
                  orderBy: { sort: "asc" },
                  include: {
                    interpreter: true,
                    userContentProgress: {
                      where: { courseUserId: id },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!courseUser) {
      throw new ErrorResponse("CourseUser not found", 404);
    }

    return courseUser;
  }

  static async updateCourseProgress(
    uid: string,
    courseId: number,
    contentId: number
  ): Promise<any> {
    if (!uid || !courseId || !contentId) {
      throw new ErrorResponse("userId, courseId, contentId is required", 400);
    }

    const courseUser = await prisma.courseUser.findFirst({
      where: {
        userId: uid,
        courseId: courseId,
      },
      include: {
        course: {
          include: {
            chapters: {
              include: {
                contents: true,
              },
            },
          },
        },
        userContentProgress: true,
      },
    });

    if (!courseUser) {
      throw new ErrorResponse("CourseUser not found", 404);
    }

    if (courseUser.courseStatus === "NotStarted") {
      await prisma.courseUser.update({
        where: { id: courseUser.id },
        data: { courseStatus: "InProgress" },
      });
    }

    const totalContent = courseUser.course.chapters.reduce(
      (sum, chapter) => sum + chapter.contents.length,
      0
    );

    await prisma.userContentProgress.create({
      data: {
        courseUserId: courseUser.id,
        contentId: contentId,
        contentStatus: true,
      },
    });

    const completedContent = await prisma.userContentProgress.count({
      where: {
        courseUserId: courseUser.id,
        contentStatus: true,
      },
    });

    const progress = (completedContent / totalContent) * 100;
    await prisma.courseUser.update({
      where: { id: courseUser.id },
      data: { contentFinish: progress },
    });

    if (progress === 100) {
      await prisma.courseUser.update({
        where: { id: courseUser.id },
        data: { courseStatus: "Completed" },
      });
    }

    return { progress };
  }
}
