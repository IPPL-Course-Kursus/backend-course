// courseLevelService.ts
import { CourseLevelModel } from './courseLevelModel';

export const CourseLevelService = {
  async createCourseLevel(levelName: string) {
    return CourseLevelModel.create(levelName);
  },

  async getAllCourseLevels() {
    return CourseLevelModel.findAll();
  },

  async getCourseLevelById(id: number) {
    return CourseLevelModel.findById(id);
  },

  async updateCourseLevel(id: number, levelName: string) {
    return CourseLevelModel.update(id, levelName);
  },

  async deleteCourseLevel(id: number) {
    return CourseLevelModel.delete(id);
  },
};
