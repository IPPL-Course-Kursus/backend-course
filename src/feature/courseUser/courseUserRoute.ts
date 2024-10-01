import { Router } from "express";
import { JWTMiddleware } from "../../middleware/jwt_middleware";
import { CourseUserController } from "./courseUserController";

const courseUserRoute: Router = Router();

courseUserRoute.get(
  "/:uid",
  JWTMiddleware.verifyToken,
  CourseUserController.getCourseUser
);

courseUserRoute.post(
  "/",
  JWTMiddleware.verifyToken,
  CourseUserController.createCourseUser
);

export default courseUserRoute;
