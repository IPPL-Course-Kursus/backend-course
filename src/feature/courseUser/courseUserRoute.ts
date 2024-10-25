import { Router } from "express";
import { JWTMiddleware } from "../../middleware/jwt_middleware";
import { CourseUserController } from "./courseUserController";

const courseUserRoute: Router = Router();

courseUserRoute.get(
  "/",
  JWTMiddleware.verifyToken,
  JWTMiddleware.userOnly,
  CourseUserController.getCourseUser
);

courseUserRoute.get(
  "/detail/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.userOnly,
  CourseUserController.getCourseUserDetail
);

courseUserRoute.get(
  "/StartCourse/Course/:courseUserId/:chapterSort/:contentSort",
  JWTMiddleware.verifyToken,
  JWTMiddleware.userOnly,
  CourseUserController.startedCourseUser
);

courseUserRoute.put(
  "/:courseUserId/progress/content/:contentId",
  JWTMiddleware.verifyToken,
  JWTMiddleware.userOnly,
  CourseUserController.updateCourseProgress
);

export default courseUserRoute;
