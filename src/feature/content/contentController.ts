import { Request, Response, NextFunction } from 'express';
import { ContentService } from './contentService'; // Sesuaikan path dengan project kamu

export class ContentController {

  // Create a new content
  static async createContent(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      await ContentService.createContent(data);
      return res.status(201).json({
        success: true,
        message: 'Content created successfully!',
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all contents
  static async getAllContents(req: Request, res: Response, next: NextFunction) {
    try {
      const contents = await ContentService.getAllContents();
      return res.status(200).json({
        success: true,
        data: contents,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get a content by ID
  static async getContentById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const content = await ContentService.getContentById(Number(id));
      return res.status(200).json({
        success: true,
        data: content,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update an existing content
  static async updateContent(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = req.body;
      await ContentService.updateContent({ id: Number(id), ...data });
      return res.status(200).json({
        success: true,
        message: 'Content updated successfully!',
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete a content by ID
  static async deleteContent(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await ContentService.deleteContent(Number(id));
      return res.status(200).json({
        success: true,
        message: 'Content deleted successfully!',
      });
    } catch (error) {
      next(error);
    }
  }
}
