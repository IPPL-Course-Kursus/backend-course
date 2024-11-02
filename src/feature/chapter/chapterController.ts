import { Request, Response, NextFunction } from "express";
import { ChapterService } from "./chapterService";

export class ChapterController {
  static async createChapter(req: Request, res: Response, next: NextFunction) {
    try {
      const { courseId } = req.params;
      const { chapterTitle, sort } = req.body;
      await ChapterService.createChapter(courseId, chapterTitle, sort);
      res.status(201).json({ message: "Chapter created successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async getChapterById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const chapterId = id;
      const chapter = await ChapterService.getChapterById(chapterId);
      res
        .status(200)
        .json({ message: "Chapter fetched successfully", data: chapter });
    } catch (error) {
      next(error);
    }
  }

  static async getChapterByCourseId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { courseId } = req.params;
      const courseIds = courseId;
      const chapters = await ChapterService.getChapterByCourseId(courseIds);
      res
        .status(200)
        .json({ message: "Chapter fetched successfully", data: chapters });
    } catch (error) {
      next(error);
    }
  }

  static async getDetailChapter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const chapter = await ChapterService.getDetailChapter(id);
      res
        .status(200)
        .json({ message: "Chapter fetched successfully", data: chapter });
    } catch (error) {
      next(error);
    }
  }

  static async updateChapter(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { chapterTitle, sort } = req.body;
      const chapter = await ChapterService.updateChapter(
        id,
        chapterTitle,
        sort
      );
      res
        .status(200)
        .json({ message: "Chapter updated successfully", data: chapter });
    } catch (error) {
      next(error);
    }
  }

  static async deleteChapter(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const chapter = await ChapterService.deleteChapter(id);
      res
        .status(200)
        .json({ message: "Chapter deleted successfully", data: chapter });
    } catch (error) {
      next(error);
    }
  }
}
