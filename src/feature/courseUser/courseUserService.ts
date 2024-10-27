import { match } from "assert";
import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { CreateCourseUserRequest } from "./courseUserModel";
import { CourseCertificateService } from "../courseCertificate/courseCertificateService";

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
            _count: {
              select: {
                chapters: true,
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
            category: true,
            courseLevel: true,
            typeCourse: true,
            _count: {
              select: {
                chapters: true,
              },
            },
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
    courseUserId: number,
    contentId: number
  ): Promise<any> {
    if (!uid || !courseUserId || !contentId) {
      throw new ErrorResponse("userId, courseId, contentId is required", 400);
    }
    const userProgress = await prisma.userContentProgress.findFirst({
      where: {
        courseUserId: courseUserId,
        contentId: contentId,
      },
    });

    if (userProgress) {
      return;
    }

    const courseUser = await prisma.courseUser.findFirst({
      where: {
        id: courseUserId,
        userId: uid,
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
        courseUserId: courseUserId,
        contentStatus: true,
      },
    });

    const progress = (completedContent / totalContent) * 100;
    const roundedProgress = Math.round(progress);

    await prisma.courseUser.update({
      where: { id: courseUserId },
      data: { contentFinish: roundedProgress },
    });

    if (roundedProgress === 100) {
      await prisma.courseUser.update({
        where: { id: courseUserId },
        data: { courseStatus: "Completed" },
      });
      if (courseUser.course.certificateStatus === true) {
        try {
          await CourseCertificateService.createCertificate(courseUserId);
        } catch (error) {
          console.error("Course don't have certificate", error);
        }
      }
    }

    return roundedProgress;
  }
}
