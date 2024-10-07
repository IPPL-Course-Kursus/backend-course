import { Request, Response, NextFunction } from "express";
import { CourseService } from "./courseService";

export class CourseController {
  static async getAllCourses(req: Request, res: Response, next: NextFunction) {
    try {
      const courses = await CourseService.getAllCourses();
      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  }

  static async getCourseByUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = res.locals.user.uid;
      const course = await CourseService.getCourseById(userId);
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async getCourseByCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { categoryId } = req.params;
      const category = parseInt(categoryId, 10);
      if (isNaN(category)) {
        return res.status(400).json({ message: "Invalid category ID" });
      }

      const course = await CourseService.getCourseByCategory(category);
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async getCourseByLevel(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { levelId } = req.params;
      const level = parseInt(levelId, 10);
      if (isNaN(level)) {
        return res.status(400).json({ message: "Invalid level ID" });
      }
      const course = await CourseService.getCourseByLevel(level);
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async getCourseByType(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { typeId } = req.params;
      const type = parseInt(typeId, 10);
      if (isNaN(type)) {
        return res.status(400).json({ message: "Invalid type ID" });
      }
      const course = await CourseService.getCourseByType(type);
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async getCourseBySearch(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { search } = req.params;
      const course = await CourseService.getCourseBySearch(search);
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async getDetailCourse(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const courseId = parseInt(id, 10);
      if (isNaN(courseId)) {
        return res.status(400).json({ message: "Invalid course ID" });
      }
      const course = await CourseService.getDetailCourse(courseId);
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCourse(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const courseId = parseInt(id, 10);

      if (isNaN(courseId)) {
        return res.status(400).json({ message: "Invalid course ID" });
      }
      await CourseService.deleteCourse(courseId);
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async createCourse(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const image = req.file;
      const user = res.locals.user;
      const course = await CourseService.createCourse(data, image, user.uid);
      res.status(201).json({ message: "Course created successfully", course });
    } catch (error) {
      next(error);
    }
  }

  static async updateCourse(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const courseId = parseInt(id, 10);
      const data = req.body;
      const image = req.file;
      if (isNaN(courseId)) {
        return res.status(400).json({ message: "Invalid course ID" });
      }
      const course = await CourseService.updateCourse(courseId, data, image);
      res.status(200).json({ message: "Course updated successfully", course });
    } catch (error) {
      next(error);
    }
  }

  static async getCoursesByFilter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const typeId = req.query.typeId
        ? parseInt(req.query.typeId as string, 10)
        : undefined;
      const categoryId = req.query.categoryId
        ? parseInt(req.query.categoryId as string, 10)
        : undefined;
      const levelId = req.query.levelId
        ? parseInt(req.query.levelId as string, 10)
        : undefined;
      const promoStatus =
        req.query.promoStatus === "true"
          ? true
          : req.query.promoStatus === "false"
          ? false
          : undefined;

      const courses = await CourseService.getCoursesByFilter(
        typeId,
        categoryId,
        levelId,
        promoStatus
      );

      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  }
}
