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
  "/:search",
  JWTMiddleware.verifyToken,
  CourseController.getCourseBySearch
);
courseRoute.get(
  "/type/:typeId",
  JWTMiddleware.verifyToken,
  CourseController.getCourseByType
);
courseRoute.get(
  "/:id",
  JWTMiddleware.verifyToken,
  CourseController.getDetailCourse
);
courseRoute.get(
  "/level/:levelId",
  JWTMiddleware.verifyToken,
  CourseController.getCourseByLevel
);
courseRoute.get(
  "/category/:categoryId",
  JWTMiddleware.verifyToken,
  CourseController.getCourseByCategory
);
courseRoute.get(
  "/user",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  CourseController.getCourseByUserId
);

courseRoute.get(
  "/type/:typeId/category/:categoryId/level/:levelId",
  CourseController.getCoursesByFilter
);

courseRoute.post(
  "/createCourse",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  upload.single("image"),
  CourseController.createCourse
);

courseRoute.put(
  "/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  upload.single("image"),
  CourseController.updateCourse
);

courseRoute.delete(
  "/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  CourseController.deleteCourse
);

export default courseRoute;
