import { ErrorResponse } from "../models/error_response";
import { admin } from "../config/firebase";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { Request, Response, NextFunction } from "express";
import { Token } from "../models/token_model";
const dotenv = require("dotenv");
dotenv.config();

export class JWTMiddleware {
  static async verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new ErrorResponse("Unauthorized", 401, ["token"], "UNAUTHORIZED");
      }

      const idToken = authHeader.split("Bearer ")[1];
      const decoded: DecodedIdToken = await admin.auth().verifyIdToken(idToken);
      res.locals.user = decoded;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async userOnly(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user as Token;
      if (user.role !== "User") {
        throw new ErrorResponse(
          "Access denied. User role required.",
          403,
          ["FORBIDDEN"],
          "FORBIDDEN"
        );
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  static async adminOnly(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user as Token;
      if (user.role !== "Admin") {
        throw new ErrorResponse(
          "Access denied. Admin role required.",
          403,
          ["FORBIDDEN"],
          "FORBIDDEN"
        );
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  static async instrukturOnly(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user as Token;
      if (user.role !== "Instruktur") {
        throw new ErrorResponse(
          "Access denied. Instruktur role required.",
          403,
          ["FORBIDDEN"],
          "FORBIDDEN"
        );
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}
