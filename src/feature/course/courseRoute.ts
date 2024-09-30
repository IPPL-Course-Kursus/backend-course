import { Router } from "express";
import { CourseController } from "./courseController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";
import multer from "multer";

const courseRoute: Router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

courseRoute.get("/", CourseController.getAllCourses);
courseRoute.get("/:search", CourseController.getCourseBySearch);
courseRoute.get("/type/:typeId", CourseController.getCourseByType);
courseRoute.get("/:id", CourseController.getDetailCourse);
courseRoute.get("/level/:levelId", CourseController.getCourseByLevel);
courseRoute.get("/category/:categoryId", CourseController.getCourseByCategory);

courseRoute.post(
  "/",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  upload.single("image"),
  CourseController.createCourse
);

courseRoute.put(
  "/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  upload.single("image"),
  CourseController.updateCourse
);

courseRoute.delete(
  "/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  CourseController.deleteCourse
);

export default courseRoute;
