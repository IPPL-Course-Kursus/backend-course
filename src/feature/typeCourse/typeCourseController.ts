import { Request, Response } from 'express';
import {
  createTypeCourse,
  getTypeCourses,
  getTypeCourseById,
  updateTypeCourse,
  deleteTypeCourse,
} from '../../models/typeCourseModel';

export const createType = async (req: Request, res: Response) => {
  try {
    const { typeName } = req.body;
    const newType = await createTypeCourse(typeName);
    res.status(201).json(newType);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create type course' });
  }
};

export const getTypes = async (req: Request, res: Response) => {
  try {
    const types = await getTypeCourses();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve types' });
  }
};

export const getTypeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const type = await getTypeCourseById(Number(id));
    if (!type) return res.status(404).json({ error: 'Type not found' });
    res.status(200).json(type);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve type' });
  }
};

export const updateType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { typeName } = req.body;
    const updatedType = await updateTypeCourse(Number(id), typeName);
    res.status(200).json(updatedType);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update type' });
  }
};

export const deleteType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteTypeCourse(Number(id));
    res.status(200).json({ message: 'Type deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete type' });
  }
};
