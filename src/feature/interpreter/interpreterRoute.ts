import { Router } from 'express';
import { createInterpreterController, getInterpretersController, getInterpreterByIdController, updateInterpreterController, deleteInterpreterController } from './interpreterController';

const router = Router();

router.post('/', createInterpreterController);         // Create
router.get('/', getInterpretersController);            // Get all
router.get('/:id', getInterpreterByIdController);     // Get by ID
router.put('/:id', updateInterpreterController);      // Update
router.delete('/:id', deleteInterpreterController);   // Delete

export default router;
