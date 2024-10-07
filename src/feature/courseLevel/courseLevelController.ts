// courseLevelController.ts
import { Request, Response } from 'express';
import { CourseLevelService } from './courseLevelService';


export const CourseLevelController = {
  async createCourseLevel(req: Request, res: Response) {
    try {
      const { levelName } = req.body;
      const newCourseLevel = await CourseLevelService.createCourseLevel(levelName);
      res.status(201).json(newCourseLevel);
    } catch (error) {
      res.status(500).json({ message: 'Error creating course level', error });
    }
  },

  async getAllCourseLevels(req: Request, res: Response) {
    try {
      const courseLevels = await CourseLevelService.getAllCourseLevels();
      res.status(200).json(courseLevels);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching course levels', error });
    }
  },

  async getCourseLevelById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const courseLevel = await CourseLevelService.getCourseLevelById(Number(id));
      if (!courseLevel) {
        return res.status(404).json({ message: 'Course level not found' });
      }
      res.status(200).json(courseLevel);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching course level', error });
    }
  },

  async updateCourseLevel(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { levelName } = req.body;
      const updatedCourseLevel = await CourseLevelService.updateCourseLevel(Number(id), levelName);
      res.status(200).json(updatedCourseLevel);
    } catch (error) {
      res.status(500).json({ message: 'Error updating course level', error });
    }
  },

  async deleteCourseLevel(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await CourseLevelService.deleteCourseLevel(Number(id));
      res.status(200).json({ message: 'Course level deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting course level', error });
    }
  },
};
