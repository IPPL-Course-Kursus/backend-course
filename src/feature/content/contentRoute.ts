import { Router } from "express";
import { ContentController } from "./contentController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";

const contentRoute: Router = Router();

contentRoute.post(
  "/create-content/:chapterId",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ContentController.createContent
);
contentRoute.get(
  "/chapter/:chapterId",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ContentController.getContentByChapterId
);
contentRoute.get(
  "/detail-content/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ContentController.getDetailContent
);
contentRoute.get(
  "/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ContentController.getContentById
);
contentRoute.put(
  "/update-content/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ContentController.updateContent
);
contentRoute.delete(
  "/delete-content/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ContentController.deleteContent
);

export default contentRoute;
