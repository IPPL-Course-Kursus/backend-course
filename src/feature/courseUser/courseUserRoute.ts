import { Router } from "express";
import { JWTMiddleware } from "../../middleware/jwt_middleware";
import { CourseUserController } from "./courseUserController";

const courseUserRoute: Router = Router();

courseUserRoute.get(
  "/",
  JWTMiddleware.verifyToken,
  CourseUserController.getCourseUser
);

courseUserRoute.get(
  "/detail/:id",
  JWTMiddleware.verifyToken,
  CourseUserController.getCourseUserDetail
);

export default courseUserRoute;
