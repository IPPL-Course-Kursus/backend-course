import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createCategory = async (categoryName: string, image: string) => {
  return prisma.category.create({
    data: { categoryName, image },
  });
};

export const getCategories = async () => {
  return prisma.category.findMany();
};

export const getCategoryById = async (id: number) => {
  return prisma.category.findUnique({
    where: { id },
  });
};

export const updateCategory = async (id: number, categoryName: string, image: string) => {
  return prisma.category.update({
    where: { id },
    data: { categoryName, image },
  });
};

export const deleteCategory = async (id: number) => {
  return prisma.category.delete({
    where: { id },
  });
};
