// courseLevelModel.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const CourseLevelModel = {
  // Create a new course level
  async create(levelName: string) {
    return prisma.courseLevel.create({
      data: {
        levelName,
      },
    });
  },

  // Find all course levels
  async findAll() {
    return prisma.courseLevel.findMany();
  },

  // Find a course level by ID
  async findById(id: number) {
    return prisma.courseLevel.findUnique({
      where: { id },
    });
  },

  // Update a course level
  async update(id: number, levelName: string) {
    return prisma.courseLevel.update({
      where: { id },
      data: { levelName },
    });
  },

  // Delete a course level
  async delete(id: number) {
    return prisma.courseLevel.delete({
      where: { id },
    });
  },
};
