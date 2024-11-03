import { Request, Response, NextFunction } from "express";
import { CourseLevelService } from "./courseLevelService";

export class CourseLevelController {
  static async getAllCourseLevels(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const courseLevels = await CourseLevelService.getAllCourseLevels();
      res.status(200).json(courseLevels);
    } catch (error) {
      next(error);
    }
  }

  static async getCourseLevelById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const idCourseLevel = parseInt(id, 10);
      const courseLevel = await CourseLevelService.getCourseLevelById(
        idCourseLevel
      );
      res.status(200).json(courseLevel);
    } catch (error) {
      next(error);
    }
  }

  static async createCourseLevel(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      await CourseLevelService.createCourseLevel(data);
      res.status(201).json({ message: "Course level created successfully" });
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

  static async updateCourseLevel(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const idCourseLevel = parseInt(id, 10);
      const data = req.body;
      await CourseLevelService.updateCourseLevel(idCourseLevel, data);
      res.status(200).json({ message: "Course level updated successfully" });
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

  static async deleteCourseLevel(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const idCourseLevel = parseInt(id, 10);
      await CourseLevelService.deleteCourseLevel(idCourseLevel);
      res.status(200).json({ message: "Course level deleted successfully" });
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
