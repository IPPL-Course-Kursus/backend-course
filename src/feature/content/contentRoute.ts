import { Router } from 'express';
import { ContentController } from './contentController'; // Sesuaikan path sesuai kebutuhan

const contentRoute: Router = Router();

// Create a new content
contentRoute.post(
  '/',
  ContentController.createContent
);

// Get all contents
contentRoute.get(
  '/',
  ContentController.getAllContents
);

// Get a specific content by ID
contentRoute.get(
  '/:id',
  ContentController.getContentById
);

// Update a content by ID
contentRoute.put(
  '/:id',
  ContentController.updateContent
);

// Delete a content by ID
contentRoute.delete(
  '/:id',
  ContentController.deleteContent
);

export default contentRoute;
