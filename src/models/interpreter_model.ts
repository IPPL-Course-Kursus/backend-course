import { PrismaClient, LanguageInterpreter } from '@prisma/client';

const prisma = new PrismaClient();

export const createInterpreter = async (languageInterpreter: LanguageInterpreter, sourceCode: string) => {
  return prisma.interpreter.create({
    data: {
      languageInterpreter,
      sourceCode,
    },
  });
};

export const getInterpreters = async () => {
  return prisma.interpreter.findMany();
};

export const getInterpreterById = async (id: number) => {
  return prisma.interpreter.findUnique({
    where: { id },
  });
};

export const updateInterpreter = async (id: number, languageInterpreter: LanguageInterpreter, sourceCode: string) => {
  return prisma.interpreter.update({
    where: { id },
    data: {
      languageInterpreter,
      sourceCode,
    },
  });
};

export const deleteInterpreter = async (id: number) => {
  return prisma.interpreter.delete({
    where: { id },
  });
};
