import { Request, Response, NextFunction } from "express";
import { ContentService } from "./contentService";

export class ContentController {
  static async createContent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { chapterId } = req.params;
      const data = req.body;
      await ContentService.createContent(parseInt(chapterId), data);
      res.status(201).json({ message: "Content created successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async getContentByChapterId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { chapterId } = req.params;
      const contents = await ContentService.getContentByChapterId(
        parseInt(chapterId)
      );
      res
        .status(200)
        .json({ message: "Content fetched successfully", data: contents });
    } catch (error) {
      next(error);
    }
  }

  static async getContentById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const content = await ContentService.getContentById(parseInt(id));
      res
        .status(200)
        .json({ message: "Content fetched successfully", data: content });
    } catch (error) {
      next(error);
    }
  }

  static async getDetailContent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const content = await ContentService.getDetailContent(parseInt(id));
      res
        .status(200)
        .json({ message: "Content fetched successfully", data: content });
    } catch (error) {
      next(error);
    }
  }

  static async updateContent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;
      await ContentService.updateContent(parseInt(id), data);
      res.status(200).json({ message: "Content updated successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteContent(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await ContentService.deleteContent(parseInt(id));
      res.status(200).json({ message: "Content deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}
