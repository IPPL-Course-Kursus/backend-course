import { createTypeCourse, getTypeCourses, getTypeCourseById, updateTypeCourse, deleteTypeCourse } from '../../models/typeCourseModel';

export const createType = async (typeName: string) => {
  return await createTypeCourse(typeName);
};

export const getAllTypes = async () => {
  return await getTypeCourses();
};

export const getType = async (id: number) => {
  return await getTypeCourseById(id);
};

export const updateType = async (id: number, typeName: string) => {
  return await updateTypeCourse(id, typeName);
};

export const removeType = async (id: number) => {
  return await deleteTypeCourse(id);
};
