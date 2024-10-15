import { Router } from "express";
import { CourseLevelController } from "./courseLevelController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";

const courseLevelRoute: Router = Router();

courseLevelRoute.get("/", CourseLevelController.getAllCourseLevels);

courseLevelRoute.get("/:id", CourseLevelController.getCourseLevelById);

courseLevelRoute.post(
  "/create-course-level",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  CourseLevelController.createCourseLevel
);

courseLevelRoute.put(
  "/update-course-level/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  CourseLevelController.updateCourseLevel
);

courseLevelRoute.delete(
  "/delete-course-level/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  CourseLevelController.deleteCourseLevel
);

export default courseLevelRoute;
