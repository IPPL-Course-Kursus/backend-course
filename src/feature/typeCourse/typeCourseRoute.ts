import express from 'express';
import {
  createTypeHandler,
  getTypesHandler,
  getTypeByIdHandler,
  updateTypeHandler,
  deleteTypeHandler,
} from './typeCourseController';

const router = express.Router();

router.post('/', createTypeHandler);
router.get('/', getTypesHandler);
router.get('/:id', getTypeByIdHandler);
router.put('/:id', updateTypeHandler);
router.delete('/:id', deleteTypeHandler);

export default router;
