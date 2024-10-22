import { Request, Response, NextFunction } from "express";
import { CourseUserService } from "./courseUserService";
import { parse } from "path";

export class CourseUserController {
  static async getCourseUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user;
      const uid = user.uid;
      const courseUser = await CourseUserService.getCourseUser(uid);
      res
        .status(200)
        .json({ message: "success get course user", data: courseUser });
    } catch (error) {
      next(error);
    }
  }

  static async getCourseUserDetail(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const courseUser = parseInt(id);
      const courseUserDetail = await CourseUserService.getCourseUserDetail(
        courseUser
      );
      res.status(200).json({
        message: "success get course user detail",
        data: courseUserDetail,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateCourseProgress(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = res.locals.user;
      const { courseId, contentId } = req.params;
      const progress = await CourseUserService.updateCourseProgress(
        user.uid,
        parseInt(courseId),
        parseInt(contentId)
      );
      res.status(200).json({ message: "progress updated", data: progress });
    } catch (error) {
      next(error);
    }
  }

  static async startedCourseUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { courseUserId, chapterSort, contentSort } = req.params;

      if (!courseUserId || !chapterSort || !contentSort) {
        return res.status(400).json({
          message: "courseUserId, chapterSort, and contentSort are required",
        });
      }

      const parsedCourseUserId = parseInt(courseUserId);
      const parsedChapterSort = parseInt(chapterSort);
      const parsedContentSort = parseInt(contentSort);

      if (
        isNaN(parsedCourseUserId) ||
        isNaN(parsedChapterSort) ||
        isNaN(parsedContentSort)
      ) {
        return res.status(400).json({
          message:
            "courseUserId, chapterSort, and contentSort must be valid numbers",
        });
      }

      const courseUser = await CourseUserService.startedCourseUser(
        parsedCourseUserId,
        parsedChapterSort,
        parsedContentSort
      );

      res.status(200).json({
        message: "success started course user",
        data: courseUser,
      });
    } catch (error) {
      next(error);
    }
  }
}
