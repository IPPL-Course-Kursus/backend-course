import { Router } from "express";
import { InterpreterLanguageController } from "./interpreterLanguageController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";

const interpreterLanguageRoute: Router = Router();

interpreterLanguageRoute.get(
  "/",
  JWTMiddleware.verifyToken,
  InterpreterLanguageController.getAllLanguages
);

interpreterLanguageRoute.get(
  "/:id",
  JWTMiddleware.verifyToken,
  InterpreterLanguageController.getLanguageById
);

interpreterLanguageRoute.post(
  "/create-language",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  InterpreterLanguageController.createLanguage
);

interpreterLanguageRoute.put(
  "/update-language/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  InterpreterLanguageController.updateLanguage
);

interpreterLanguageRoute.delete(
  "/delete-language/:id",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  InterpreterLanguageController.deleteLanguage
);

export default interpreterLanguageRoute;
