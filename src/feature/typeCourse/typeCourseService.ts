import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import {
  CreateTypeCourseRequest,
  UpdateTypeCourseRequest,
  DeleteTypeCourseRequest,
  GetTypeCourseByIdRequest,
} from "./typeCourseModel";
import { TypeCourseValidation } from "./typeCourseValidation";
import { Validation } from "../../validations/validation";

export class TypeCourseService {
  static async createTypeCourse(
    request: CreateTypeCourseRequest
  ): Promise<void> {
    const validatedRequest = Validation.validate(
      TypeCourseValidation.CREATE,
      request
    );
    const { typeName } = validatedRequest;

    const existingTypeCourse = await prisma.typeCourse.findFirst({
      where: { typeName },
    });

    if (existingTypeCourse) {
      throw new ErrorResponse("Type course already exists", 400);
    }

    try {
      await prisma.typeCourse.create({
        data: { typeName },
      });
    } catch (error) {
      console.error("Error during type course creation:", error);
      throw new ErrorResponse(
        "Type course creation failed: unable to save to database",
        500,
        ["database"]
      );
    }
  }
  static async getAllTypeCourses(): Promise<any> {
    try {
      const types = await prisma.typeCourse.findMany();
      return types;
    } catch (error) {
      console.error("Error during fetching type courses:", error);
      throw new ErrorResponse(
        "Failed to retrieve type courses from database",
        500,
        ["database"]
      );
    }
  }
  static async getTypeCourseById(
    request: GetTypeCourseByIdRequest
  ): Promise<any> {
    try {
      const type = await prisma.typeCourse.findUnique({
        where: { id: request.id },
      });
      if (!type) {
        throw new ErrorResponse("Type course not found", 404, ["id"]);
      }
      return type;
    } catch (error) {
      console.error("Error during fetching type course by ID:", error);
      throw new ErrorResponse(
        "Failed to retrieve type course from database",
        500,
        ["database", "id"]
      );
    }
  }
  static async updateTypeCourse(
    request: UpdateTypeCourseRequest
  ): Promise<any> {
    try {
      const updatedTypeCourse = await prisma.typeCourse.update({
        where: {
          id: request.id,
        },
        data: {
          typeName: request.typeName,
        },
      });

      return updatedTypeCourse;
    } catch (error) {
      console.error("Error updating type course:", error);
      throw new Error("Error updating type course");
    }
  }

  static async deleteTypeCourse(
    request: DeleteTypeCourseRequest
  ): Promise<void> {
    try {
      const relatedCourses = await prisma.course.findMany({
        where: { typeCourseId: request.id },
        select: { courseName: true, id: true },
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
      await prisma.typeCourse.delete({
        where: { id: request.id },
      });
    } catch (error) {
      console.error("Error during type course deletion:", error);
      throw new ErrorResponse(
        "Type course deletion failed: unable to delete from database",
        500,
        ["database", "id"]
      );
    }
  }
}
