import { Router } from 'express';
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from './categoryController';

const router = Router();

router.post('/', create);            // Create Category
router.get('/', getAll);             // Get all Categories
router.get('/:id', getById);         // Get Category by ID
router.put('/:id', update);          // Update Category
router.delete('/:id', remove);       // Delete Category

export default router;
