import { Request, Response, NextFunction } from "express";
import { TypeCourseService } from "./typeCourseService";

export class TypeCourseController {
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
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }
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
  static async getTypeCourseById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const typeCourseId = parseInt(id, 10);
      const type = await TypeCourseService.getTypeCourseById({
        id: typeCourseId,
      });

      return res.status(200).json({
        success: true,
        data: type,
      });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

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
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }
  static async deleteTypeCourse(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const typeCourseId = parseInt(id, 10);
      await TypeCourseService.deleteTypeCourse({ id: typeCourseId });
      return res.status(200).json({
        success: true,
        message: "Type course deleted successfully!",
      });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }
}
