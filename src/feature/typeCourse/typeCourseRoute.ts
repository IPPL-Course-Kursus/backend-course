import { Router } from "express";
import { TypeCourseController } from "./typeCourseController"; // Adjust the path as needed

const typeCourseRoute: Router = Router();

// Create a new type course
typeCourseRoute.post("/", TypeCourseController.createTypeCourse);

// Get all type courses
typeCourseRoute.get("/", TypeCourseController.getAllTypeCourses);

// Get a specific type course by ID
typeCourseRoute.get("/:id", TypeCourseController.getTypeCourseById);

// Update a type course by ID
typeCourseRoute.put("/:id", TypeCourseController.updateTypeCourse);

// Delete a type course by ID
typeCourseRoute.delete("/:id", TypeCourseController.deleteTypeCourse);

export default typeCourseRoute;
