import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { CreateCourseUserRequest } from "./courseUserModel";

export class CourseUserService {
  static async getCourseUser(uid: string): Promise<any> {
    const courseUser = await prisma.courseUser.findMany({
      where: { userId: uid },
    });
    return courseUser;
  }

  static async createCourseUser(data: CreateCourseUserRequest): Promise<any> {
    const courseUser = await prisma.courseUser.create({
      data: {
        userId: data.userId,
        courseId: data.courseId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return courseUser;
  }
}
