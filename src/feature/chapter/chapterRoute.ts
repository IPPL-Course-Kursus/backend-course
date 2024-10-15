import { Router } from "express";
import { ChapterController } from "./chapterController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";

const chapteryRoute: Router = Router();

chapteryRoute.post(
  "/create-chapter/:courseId",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ChapterController.createChapter
);

chapteryRoute.get(
  "/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ChapterController.getChapterById
);
chapteryRoute.get(
  "/course/:courseId",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ChapterController.getChapterByCourseId
);

chapteryRoute.get(
  "/detail/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ChapterController.getDetailChapter
);

chapteryRoute.put(
  "/update/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ChapterController.updateChapter
);
chapteryRoute.delete(
  "/delete/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.instrukturOnly,
  ChapterController.deleteChapter
);

export default chapteryRoute;
