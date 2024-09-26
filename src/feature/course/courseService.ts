import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { CourseRequest } from "./courseModel";
import { Validation } from "../../validations/validation";

export class CourseService {
  static async createCourse(data: CourseRequest): Promise<any> {}

  static async getAllCourse(): Promise<any> {}

  static async getCourseById(id: string): Promise<any> {}

  static async updateCourse(id: string, data: CourseRequest): Promise<any> {}

  static async deleteCourse(id: string): Promise<any> {}

  static async getCourseByUserId(id: string): Promise<any> {}
}
