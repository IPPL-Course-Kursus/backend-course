// src/controllers/typeCourseController.ts
import { Request, Response } from 'express';
import {
  createType,
  getAllTypes,
  getType,
  updateType,
  removeType,
} from './typeCourseServis';

export const createTypeHandler = async (req: Request, res: Response) => {
  try {
    const { typeName } = req.body;
    const newType = await createType(typeName);
    res.status(201).json(newType);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create type course' });
  }
};

export const getTypesHandler = async (req: Request, res: Response) => {
  try {
    const types = await getAllTypes();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve types' });
  }
};

export const getTypeByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const type = await getType(Number(id));
    if (!type) return res.status(404).json({ error: 'Type not found' });
    res.status(200).json(type);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve type' });
  }
};

export const updateTypeHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { typeName } = req.body;
    const updatedType = await updateType(Number(id), typeName);
    res.status(200).json(updatedType);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update type' });
  }
};

export const deleteTypeHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await removeType(Number(id));
    res.status(200).json({ message: 'Type deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete type' });
  }
};
