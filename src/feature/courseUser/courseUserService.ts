import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { CreateCourseUserRequest } from "./courseUserModel";

export class CourseUserService {
  static async getCourseUser(uid: string): Promise<any> {
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

    return courseUser;
  }

  static async getCourseUserDetail(id: number): Promise<any> {
    const courseUser = await prisma.courseUser.findUnique({
      where: {
        id,
      },
      include: {
        course: {
          include: {
            chapters: {
              include: {
                contents: {
                  include: {
                    interpreter: true,
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
        data: { courseStatus: "InProgress", contentFinish: 0 },
      });
    }

    const totalContent = courseUser.course.chapters.reduce(
      (sum, chapter) => sum + chapter.contents.length,
      0
    );

    const contentProgress = await prisma.userContentProgress.findFirst({
      where: {
        courseUserId: courseUser.id,
        contentId: contentId,
      },
    });

    if (contentProgress) {
      if (!contentProgress.contentStatus) {
        await prisma.userContentProgress.update({
          where: { id: contentProgress.id },
          data: { contentStatus: true },
        });
      }
    } else {
      await prisma.userContentProgress.create({
        data: {
          courseUserId: courseUser.id,
          contentId: contentId,
          contentStatus: true,
        },
      });
    }

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

    return { progress, completedContent, totalContent };
  }
}
