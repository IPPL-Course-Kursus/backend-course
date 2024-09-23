import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTypeCourse = async (typeName: string) => {
  return prisma.typeCourse.create({
    data: { typeName },
  });
};

export const getTypeCourses = async () => {
  return prisma.typeCourse.findMany();
};

export const getTypeCourseById = async (id: number) => {
  return prisma.typeCourse.findUnique({
    where: { id },
  });
};

export const updateTypeCourse = async (id: number, typeName: string) => {
  return prisma.typeCourse.update({
    where: { id },
    data: { typeName },
  });
};

export const deleteTypeCourse = async (id: number) => {
  return prisma.typeCourse.delete({
    where: { id },
  });
};
