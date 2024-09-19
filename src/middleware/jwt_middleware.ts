import { ErrorResponse } from "../models/error_response";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { Token } from "../models/token_model";
const dotenv = require("dotenv");
dotenv.config();

export class JWTMiddleware {
  static async verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        throw new ErrorResponse("Unauthorized", 401, ["token"], "UNAUTHORIZED");
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!);
      res.locals.user = decoded as Token;
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
