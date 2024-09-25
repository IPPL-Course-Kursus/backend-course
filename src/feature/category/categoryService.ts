import { Request, Response } from 'express';
import {
    getCategories,
    getCategoryById,
} from '../../models/category_model';
  
export const getAll = async (req: Request, res: Response) => {
    try {
      const categories = await getCategories();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve categories' });
    }
  };
  
  export const getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const category = await getCategoryById(Number(id));
      if (!category) return res.status(404).json({ error: 'Category not found' });
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve category' });
    }
  };
  