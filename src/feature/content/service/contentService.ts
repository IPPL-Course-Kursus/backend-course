// src/feature/content/service/contentService.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create Content
export const createContent = async (data: any) => {
    try {
        return await prisma.content.create({ data });
      } catch (error) {
        console.error("Database error:", error); // Tangkap dan tampilkan error
        throw error; // Lemparkan error ke controller
      }
};

// Get All Contents
export const getContents = async () => {
  return prisma.content.findMany({
    include: {
      chapter: true,
      interpreter: true,
    },
  });
};

// Get Content By ID
export const getContentById = async (id: number) => {
  return prisma.content.findUnique({
    where: { id },
    include: {
      chapter: true,
      interpreter: true,
    },
  });
};

// Update Content
export const updateContent = async (id: number, data: any) => {
  return prisma.content.update({
    where: { id },
    data,
  });
};

// Delete Content
export const deleteContent = async (id: number) => {
  return prisma.content.delete({
    where: { id },
  });
};
