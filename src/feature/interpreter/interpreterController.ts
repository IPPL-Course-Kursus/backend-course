import { Request, Response, NextFunction } from "express";
import { InterpreterService } from "./interpreterService";
import { LanguageInterpreter } from "@prisma/client";

export class InterpreterController {
  static async createInterpreter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { languageInterpreter, sourceCode } = req.body;

      await InterpreterService.createInterpreter({
        languageInterpreter,
        sourceCode,
      });

      res.status(200).json({
        success: true,
        message: "Interpreter created successfully!",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllInterpreters(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const interpreters = await InterpreterService.getAllInterpreters();
      res.status(200).json({
        success: true,
        data: interpreters,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getInterpreterById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const interpreter = await InterpreterService.getInterpreterById(
        Number(id)
      );

      res.status(200).json({
        success: true,
        data: interpreter,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateInterpreter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const { languageInterpreter, sourceCode } = req.body;

      await InterpreterService.updateInterpreter({
        id: Number(id),
        languageInterpreter,
        sourceCode,
      });

      res.status(200).json({
        success: true,
        message: "Interpreter updated successfully!",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteInterpreter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      await InterpreterService.deleteInterpreter(Number(id));

      res.status(200).json({
        success: true,
        message: "Interpreter deleted successfully!",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getLanguages(req: Request, res: Response, next: NextFunction) {
    try {
      const languages = Object.values(LanguageInterpreter);
      res.status(200).json({
        success: true,
        data: languages,
      });
    } catch (error) {
      next(error);
    }
  }
}
