import { Router } from 'express';
import {
  createType,
  getTypes,
  getTypeById,
  updateType,
  deleteType,
} from './typeCourseController';

const router = Router();
router.get("/", (req, res) => {
    res.send("Type Course Route");
});

router.post('/types', createType);        // Create Type
router.get('/types', getTypes);           // Get all Types
router.get('/types/:id', getTypeById);    // Get Type by ID
router.put('/types/:id', updateType);     // Update Type
router.delete('/types/:id', deleteType);  // Delete Type

export default router;
