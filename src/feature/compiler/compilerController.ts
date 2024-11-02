import { Request, Response, NextFunction } from "express";
import { CompilerService } from "./compilerService";

export class CompilerController {
  static async compile(req: Request, res: Response, next: NextFunction) {
    try {
      const { languageInterpreterId, sourceCode } = req.body;
      const result = await CompilerService.compile(
        languageInterpreterId,
        sourceCode
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
