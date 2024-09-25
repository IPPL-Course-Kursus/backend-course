// src/feature/content/contentRoute.ts

import { Router } from 'express';
import {
  createNewContent,
  getAllContents,
  getSingleContent,
  modifyContent,
  removeContent,
} from './contentController';

const router = Router();

router.post('/', createNewContent);       // Create Content
router.get('/', getAllContents);          // Get all Contents
router.get('/:id', getSingleContent);    // Get Content by ID
router.put('/:id', modifyContent);       // Update Content
router.delete('/:id', removeContent);    // Delete Content

export default router;
