import { LanguageInterpreter } from '@prisma/client';
import { createInterpreter, getInterpreters, getInterpreterById, updateInterpreter, deleteInterpreter } from '../../models/interpreter_model';

export const createInterpreterService = async (languageInterpreter: LanguageInterpreter, sourceCode: string) => {
  return createInterpreter(languageInterpreter, sourceCode);
};

export const getInterpretersService = async () => {
  return getInterpreters();
};

export const getInterpreterByIdService = async (id: number) => {
  return getInterpreterById(id);
};

export const updateInterpreterService = async (id: number, languageInterpreter: LanguageInterpreter, sourceCode: string) => {
  return updateInterpreter(id, languageInterpreter, sourceCode);
};

export const deleteInterpreterService = async (id: number) => {
  return deleteInterpreter(id);
};
