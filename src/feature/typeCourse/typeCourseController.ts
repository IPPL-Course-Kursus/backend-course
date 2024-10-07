import { Request, Response, NextFunction } from "express";
import { TypeCourseService } from "./typeCourseService"; // Adjust the path as needed

export class TypeCourseController {
  // Create a new type course
  static async createTypeCourse(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      await TypeCourseService.createTypeCourse(data);
      return res.status(201).json({
        success: true,
        message: "Type course created successfully!",
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all type courses
  static async getAllTypeCourses(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const types = await TypeCourseService.getAllTypeCourses();
      return res.status(200).json({
        success: true,
        data: types,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get a type course by ID
  static async getTypeCourseById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const type = await TypeCourseService.getTypeCourseById(Number(id));

      return res.status(200).json({
        success: true,
        data: type,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update an existing type course
  static async updateTypeCourse(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const data = req.body;
      await TypeCourseService.updateTypeCourse({ id: Number(id), ...data });
      return res.status(200).json({
        success: true,
        message: "Type course updated successfully!",
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete a type course by ID
  static async deleteTypeCourse(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      await TypeCourseService.deleteTypeCourse(Number(id));
      return res.status(200).json({
        success: true,
        message: "Type course deleted successfully!",
      });
    } catch (error) {
      next(error);
    }
  }
}
