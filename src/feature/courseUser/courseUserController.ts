import { Request, Response, NextFunction } from "express";
import { CourseUserService } from "./courseUserService";

export class CourseUserController {
  static async getCourseUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { uid } = req.params;
      const courseUser = await CourseUserService.getCourseUser(uid);
      res.status(200).json(courseUser);
    } catch (error) {
      next(error);
    }
  }

  static async createCourseUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      const courseUser = await CourseUserService.createCourseUser(data);
      res
        .status(201)
        .json({ message: "CourseUser created successfully", courseUser });
    } catch (error) {
      next(error);
    }
  }
}
