import { Request, Response, NextFunction } from 'express';
import { chapterService } from './chapterService';
import { parse } from 'path';
import { database } from 'firebase-admin';

export class ChapterController {
  

  static async createChapter(req: Request, res: Response, next: NextFunction) {
    try {
      const { courseId } = req.params;
      const course = parseInt(courseId);
      const data = req.body;
      
      if (isNaN(course)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid course ID',
        });
      }
      await chapterService.createChapter(course, data);
      
      return res.status(201).json({
        success: true,
        message: 'Chapter created successfully!',
      });
    } catch (error) {
      next(error); 
    }
  }


  static async updateChapter(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const chapterId = parseInt(id);
      const data = req.body;

      if (isNaN(chapterId)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid chapter ID',
        });
      }

      await chapterService.updateChapter (chapterId, data);
      
      return res.status(200).json({
        success: true,
        message: 'Chapter updated successfully!',
      });
    } catch (error) {
      next(error); // Handle errors
    }
  }

  // Delete Chapter
  static async deleteChapter(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const chapterId = parseInt(id);

      if (isNaN(chapterId)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid chapter ID',
        });
      }

      await chapterService.deleteChapter(chapterId);
      
      return res.status(200).json({
        success: true,
        message: 'Chapter deleted successfully!',
      });
    } catch (error) {
      next(error); // Pass the error to the middleware
    }
  }


}
