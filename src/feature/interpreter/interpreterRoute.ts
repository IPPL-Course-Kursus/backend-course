import { Router } from "express";
import { InterpreterController } from "./interpreterController"; // Sesuaikan path sesuai kebutuhan

const interpreterRoute: Router = Router();

// Create a new interpreter
interpreterRoute.post(
  "/create-interpreter",
  InterpreterController.createInterpreter
);

// Get all interpreters
interpreterRoute.get("/", InterpreterController.getAllInterpreters);

// Get a specific interpreter by ID
interpreterRoute.get(
  "/get-interpreter/:id",
  InterpreterController.getInterpreterById
);

// Update an interpreter by ID
interpreterRoute.put(
  "/update-interpreter/:id",
  InterpreterController.updateInterpreter
);

// Delete an interpreter by ID
interpreterRoute.delete(
  "/delete-interpreter/:id",
  InterpreterController.deleteInterpreter
);

export default interpreterRoute;
