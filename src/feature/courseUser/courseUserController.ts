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

  static async getCourseUserDetail(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const user = res.locals.user;
      const courseUser = id;
      const courseUserDetail = await CourseUserService.getCourseUserDetail(
        courseUser,
        user.uid
      );
      res.status(200).json({
        message: "success get course user detail",
        data: courseUserDetail,
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

  static async updateCourseProgress(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = res.locals.user;
      const { courseUserId, contentId } = req.params;
      const progress = await CourseUserService.updateCourseProgress(
        user.uid,
        courseUserId,
        contentId
      );
      res.status(200).json({ data: progress });
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

      const parsedCourseUserId = courseUserId;
      const parsedChapterSort = parseInt(chapterSort);
      const parsedContentSort = parseInt(contentSort);

      if (isNaN(parsedChapterSort) || isNaN(parsedContentSort)) {
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
