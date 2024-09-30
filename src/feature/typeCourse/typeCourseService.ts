import { prisma } from '../../application/database'; // Adjust the path as needed
import { ErrorResponse } from '../../models/error_response'; // Adjust the path as needed
import { CreateTypeCourseRequest, UpdateTypeCourseRequest } from './typeCourseModel'; // Adjust the path as needed
import { TypeCourseValidation } from './typeCourseValidation'; // Assuming you have validation for type courses
import { Validation } from '../../validations/validation'; // Adjust the path as needed

export class TypeCourseService {
  // Create a new TypeCourse
  static async createTypeCourse(request: CreateTypeCourseRequest): Promise<void> {
    const validatedRequest = Validation.validate(TypeCourseValidation.CREATE, request);
    const { typeName } = validatedRequest;

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

  // Get all TypeCourses
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

  // Get a TypeCourse by ID
  static async getTypeCourseById(id: number): Promise<any> {
    try {
      const type = await prisma.typeCourse.findUnique({
        where: { id },
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

  // Update an existing TypeCourse
  static async updateTypeCourse(data: { id: number; typeName: string }) {
    const { id, typeName } = data;

    try {
      // Memastikan bahwa ID ada dan valid
      const updatedTypeCourse = await prisma.typeCourse.update({
        where: {
          id: id, // ID harus dikirim dengan benar di where clause
        },
        data: {
          typeName: typeName, // Update typeName
        },
      });

      return updatedTypeCourse;
    } catch (error) {
      console.error("Error updating type course:", error);
      throw new Error("Error updating type course");
    }
  }

static async deleteTypeCourse(id: number): Promise<void> {
  try {
    // Cek apakah ada course yang terhubung
    const relatedCourses = await prisma.course.findMany({
      where: { typeCourseId: id },
      select: { courseName: true, id: true } // Menampilkan hanya nama dan ID course
    });

    if (relatedCourses.length > 0) {
      const courseNames = relatedCourses.map(course => course.courseName).join(', ');
      throw new ErrorResponse(`Cannot delete type course: it is referenced by existing courses: ${courseNames}.`, 400);
    }

    // Sekarang hapus TypeCourse jika tidak ada yang terkait
    await prisma.typeCourse.delete({
      where: { id },
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
