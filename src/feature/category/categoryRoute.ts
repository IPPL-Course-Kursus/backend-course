import { Router } from 'express';
import {
  create,
  update,
  remove,
} from './categoryController';
import {
  getAll,
  getById,
} from './categoryService';

const router = Router();

router.post('/', create);            // Create Category
router.get('/', getAll);             // Get all Categories
router.get('/:id', getById);         // Get Category by ID
router.put('/:id', update);          // Update Category
router.delete('/:id', remove);       // Delete Category

export default router;
