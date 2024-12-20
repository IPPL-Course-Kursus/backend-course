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
      const user = res.locals.user;
      const course = await CourseService.getCourseByUserId(user.uid);
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async getCourseById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const idCourse = id;
      const course = await CourseService.getCourseById(idCourse);
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
      const courseId = id;
      const course = await CourseService.getDetailCourse(courseId);
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCourse(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const courseId = id;
      const user = res.locals.user;

      await CourseService.deleteCourse(courseId, user.uid);
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
      const courseId = id;
      const data = req.body;
      const image = req.file ? req.file : undefined;
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
      const isPopular =
        req.query.isPopular === "true"
          ? true
          : req.query.promoStatus === "false"
          ? false
          : undefined;
      const isNewest =
        req.query.isNewest === "true"
          ? true
          : req.query.promoStatus === "false"
          ? false
          : undefined;

      const courses = await CourseService.getCoursesByFilter(
        typeId,
        categoryId,
        levelId,
        promoStatus,
        isPopular,
        isNewest
      );

      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  }

  static async countCoursesByType(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const count = await CourseService.countCoursesByType();
      res
        .status(200)
        .json({ messege: "success get course by type", data: count });
    } catch (error) {
      next(error);
    }
  }

  static async getPopularCourses(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const courses = await CourseService.getPopularCourses();
      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  }

  static async getAllCoursesByUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = res.locals.user;
      if (!user || !user.uid) {
        return res.status(400).json({ message: "User not found or invalid" });
      }

      const courses = await CourseService.getAllCoursesByUserId(user.uid);
      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  }
}
