import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { createCategoryRequest, updateCategoryRequest } from "./categoryModel";
import { imagekit } from "../../utils/image_kit";
import { checkProhibitedWords } from "../../utils/checkProhibiteWords";

export class CategoryService {
  static async getAllCategories(): Promise<any> {
    const categories = await prisma.category.findMany({
      orderBy: {
        id: "asc",
      },
    });

    if (categories.length === 0) {
      throw new ErrorResponse("No categories found", 404);
    }

    return categories;
  }

  static async createCategory(
    request: createCategoryRequest,
    file: any
  ): Promise<any> {
    if (!request || !file) {
      throw new ErrorResponse("The data cannot be empty", 400, ["data"]);
    }

    const checkCategory = await prisma.category.findFirst({
      where: {
        OR: [{ categoryName: request.categoryName }],
      },
    });

    if (checkCategory) {
      throw new ErrorResponse("Category already exists", 400, [
        "categoryCode",
        "categoryName",
      ]);
    }

    if (checkProhibitedWords(request.categoryName)) {
      throw new ErrorResponse("Category name contains prohibited words", 400, [
        "categoryName",
      ]);
    }

    let imageUrl: string = "";
    const validFileTypes = ["image/jpeg", "image/png"];
    if (file && validFileTypes.includes(file.mimetype)) {
      try {
        const result = await imagekit.upload({
          file: file.buffer,
          fileName: `${file.originalname}`,
          folder: "/Category",
        });

        imageUrl = result.url;
      } catch (error) {
        throw new ErrorResponse("Failed to upload image", 500, ["upload"]);
      }
    }

    await prisma.category.create({
      data: {
        categoryName: request.categoryName,
        image: request.image || imageUrl,
      },
    });
  }

  static async updateCategory(
    id: number,
    request: updateCategoryRequest,
    file?: any
  ): Promise<void> {
    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new ErrorResponse("Category not found", 404, ["id"]);
    }

    if (!request.categoryName) {
      throw new ErrorResponse("The data cannot be empty", 400, ["data"]);
    }

    if (checkProhibitedWords(request.categoryName)) {
      throw new ErrorResponse("Category name contains prohibited words", 400, [
        "categoryName",
      ]);
    }

    let imageUrl = category.image;
    const validFileTypes = ["image/jpeg", "image/png"];

    if (file && validFileTypes.includes(file.mimetype)) {
      try {
        const result = await imagekit.upload({
          file: file.buffer,
          fileName: `${file.originalname}`,
          folder: "/Category",
        });

        imageUrl = result.url;
      } catch (error) {
        throw new ErrorResponse("Failed to upload image", 500, ["upload"]);
      }
    }

    await prisma.category.update({
      where: { id },
      data: {
        categoryName: request.categoryName,
        image: imageUrl,
      },
    });
  }

  static async deleteCategory(id: number): Promise<void> {
    const relatedCourses = await prisma.course.findMany({
      where: { categoryId: id },
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

    await prisma.category.delete({
      where: { id },
    });
  }

  static async getCategoryById(id: number): Promise<any> {
    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new ErrorResponse("Category not found", 404, ["id"]);
    }
    return category;
  }
}
