import { Request, Response } from 'express';
import {
  createCategory,
  updateCategory,
  deleteCategory,
} from '../../models/category_model';

export const create = async (req: Request, res: Response) => {
  try {
    const { categoryName, image } = req.body;
    const newCategory = await createCategory(categoryName, image);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { categoryName, image } = req.body;
    const updatedCategory = await updateCategory(Number(id), categoryName, image);
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCategory(Number(id));
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
};
