import { Request, Response, NextFunction } from "express";
import { InterpreterLanguageService } from "./interpreterLanguageService";

export class InterpreterLanguageController {
  static async getAllLanguages(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const languages = await InterpreterLanguageService.getAllLanguages();
      res.status(200).json({
        success: true,
        data: languages,
      });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

  static async getLanguageById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const language = await InterpreterLanguageService.getLanguageById(
        parseInt(id)
      );
      res.status(200).json({
        success: true,
        data: language,
      });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

  static async createLanguage(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      await InterpreterLanguageService.createLanguage(data);
      res.status(201).json({ message: "Language created successfully" });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

  static async updateLanguage(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = req.body;
      await InterpreterLanguageService.updateLanguage(parseInt(id), data);
      res.status(200).json({ message: "Language updated successfully" });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

  static async deleteLanguage(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await InterpreterLanguageService.deleteLanguage(parseInt(id));
      res.status(200).json({ message: "Language deleted successfully" });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }
}
