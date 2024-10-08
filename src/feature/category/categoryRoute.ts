import { Router } from "express";
import { CategoryController } from "./categoryController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";
import multer from "multer";

const categoryRoute: Router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

categoryRoute.get("/", CategoryController.getAllCategories);
categoryRoute.post(
  "/create-category",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  CategoryController.createCategory
);
categoryRoute.get(
  "/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  CategoryController.getCategoryById
);
categoryRoute.delete(
  "/delete-category/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  CategoryController.deleteCategory
);
categoryRoute.put(
  "/update-category/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  CategoryController.updateCategory
);

export default categoryRoute;
