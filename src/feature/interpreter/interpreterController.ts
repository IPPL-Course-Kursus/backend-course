import { Request, Response, NextFunction } from "express";
import { InterpreterService } from "./interpreterService";

export class InterpreterController {
  static async createInterpreter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { languageInterpreterId, sourceCode } = req.body;

      await InterpreterService.createInterpreter({
        languageInterpreterId,
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
      const { languageInterpreterId, sourceCode } = req.body;

      await InterpreterService.updateInterpreter({
        id: Number(id),
        languageInterpreterId,
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
}
