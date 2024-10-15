import { Router } from "express";
import { TypeCourseController } from "./typeCourseController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";

const typeCourseRoute: Router = Router();

typeCourseRoute.post(
  "/create-type-course",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  TypeCourseController.createTypeCourse
);

typeCourseRoute.get("/", TypeCourseController.getAllTypeCourses);

typeCourseRoute.get(
  "/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  TypeCourseController.getTypeCourseById
);

typeCourseRoute.put(
  "/update/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  TypeCourseController.updateTypeCourse
);

typeCourseRoute.delete(
  "/delete/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  TypeCourseController.deleteTypeCourse
);

export default typeCourseRoute;
