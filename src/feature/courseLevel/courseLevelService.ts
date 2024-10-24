import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { RequestCourseLevel, DeleteCourseLevel } from "./courseLevelModel";
import { checkProhibitedWords } from "../../utils/checkProhibiteWords";

export class CourseLevelService {
  static async getAllCourseLevels(): Promise<any> {
    const courseLevels = await prisma.courseLevel.findMany();

    if (courseLevels.length === 0) {
      throw new ErrorResponse("No course levels found", 404);
    }

    return courseLevels;
  }

  static async getCourseLevelById(id: number): Promise<any> {
    if (!id) {
      throw new ErrorResponse("Course level ID is required", 400);
    }
    const courseLevel = await prisma.courseLevel.findUnique({
      where: { id },
    });

    if (!courseLevel) {
      throw new ErrorResponse("Course level not found", 404);
    }

    return courseLevel;
  }

  static async createCourseLevel(
    requestCourseLevel: RequestCourseLevel
  ): Promise<any> {
    if (!requestCourseLevel) {
      throw new ErrorResponse("Course level name is required", 400);
    }

    if (checkProhibitedWords(requestCourseLevel.levelName)) {
      throw new ErrorResponse(
        "Course level name must not contain prohibited words",
        400,
        ["levelName"]
      );
    }
    const existingCourseLevel = await prisma.courseLevel.findFirst({
      where: { levelName: requestCourseLevel.levelName },
    });

    if (existingCourseLevel) {
      throw new ErrorResponse("Course level already exists", 400);
    }

    await prisma.courseLevel.create({
      data: {
        levelName: requestCourseLevel.levelName,
      },
    });
  }

  static async deleteCourseLevel(id: number) {
    if (!id) {
      throw new ErrorResponse("Course level ID is required", 400);
    }
    const courseLevel = await prisma.courseLevel.findUnique({
      where: { id },
    });
    if (!courseLevel) {
      throw new ErrorResponse("Course level not found", 404);
    }

    const relatedCourses = await prisma.course.findMany({
      where: { courseLevelId: id },
    });
    if (relatedCourses.length > 0) {
      const courseNames = relatedCourses
        .slice(0, 5)
        .map((course) => course.courseName)
        .join(", ");
      throw new ErrorResponse(
        `Cannot delete type course: it is referenced by existing courses: ${courseNames}.`,
        400
      );
    }

    await prisma.courseLevel.delete({
      where: { id },
    });
  }

  static async updateCourseLevel(
    id: number,
    requestCourseLevel: RequestCourseLevel
  ) {
    if (!id || !requestCourseLevel) {
      throw new ErrorResponse("Course level ID is required", 400);
    }
    if (checkProhibitedWords(requestCourseLevel.levelName)) {
      throw new ErrorResponse(
        "Course level name must not contain prohibited words",
        400,
        ["levelName"]
      );
    }
    const courseLevel = await prisma.courseLevel.findUnique({
      where: { id },
    });

    if (!courseLevel) {
      throw new ErrorResponse("Course level not found", 404);
    }

    await prisma.courseLevel.update({
      where: { id },
      data: {
        levelName: requestCourseLevel.levelName,
      },
    });
  }
}
