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
courseRoute.get(
  "/userId/",
  JWTMiddleware.verifyToken,
  CourseController.getAllCoursesByUserId
);
courseRoute.get("/count", CourseController.countCoursesByType);
courseRoute.get("/search/:search", CourseController.getCourseBySearch);
courseRoute.get("/type/:typeId", CourseController.getCourseByType);
courseRoute.get("/detail-course/:id", CourseController.getDetailCourse);
courseRoute.get("/level/:levelId", CourseController.getCourseByLevel);
courseRoute.get("/category/:categoryId", CourseController.getCourseByCategory);
courseRoute.get("/popular", CourseController.getPopularCourses);
courseRoute.get(
  "/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  CourseController.getCourseById
);
courseRoute.get(
  "/user",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  CourseController.getCourseByUserId
);

courseRoute.get("/filter", CourseController.getCoursesByFilter);

courseRoute.post(
  "/createCourse",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  upload.single("image"),
  CourseController.createCourse
);

courseRoute.put(
  "/update-course/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  upload.single("image"),
  CourseController.updateCourse
);

courseRoute.delete(
  "/delete-course/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  CourseController.deleteCourse
);

export default courseRoute;
