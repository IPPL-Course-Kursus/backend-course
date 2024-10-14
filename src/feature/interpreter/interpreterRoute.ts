import { Router } from 'express';
import { InterpreterController } from './interpreterController'; // Sesuaikan path sesuai kebutuhan

const interpreterRoute: Router = Router();

// Create a new interpreter
interpreterRoute.post(
  '/',
  InterpreterController.createInterpreter
);

// Get all interpreters
interpreterRoute.get(
  '/',
  InterpreterController.getAllInterpreters
);

// Get a specific interpreter by ID
interpreterRoute.get(
  '/:id',
  InterpreterController.getInterpreterById
);

// Update an interpreter by ID
interpreterRoute.put(
  '/:id',
  InterpreterController.updateInterpreter
);

// Delete an interpreter by ID
interpreterRoute.delete(
  '/:id',
  InterpreterController.deleteInterpreter
);

export default interpreterRoute;
