import { Request, Response, NextFunction } from 'express';
import { InterpreterService } from './interpreterService'; // Sesuaikan path sesuai kebutuhan
import { LanguageInterpreter } from '@prisma/client';


export class InterpreterController {
  
  // Create a new interpreter
  static async createInterpreter(req: Request, res: Response, next: NextFunction) {
    try {
      const { languageInterpreter, sourceCode } = req.body;

      // Validasi languageInterpreter
      if (!Object.values(LanguageInterpreter).includes(languageInterpreter)) {
        return res.status(400).json({ error: 'Invalid languageInterpreter value' });
      }

      await InterpreterService.createInterpreter({ languageInterpreter, sourceCode });
      return res.status(201).json({
        success: true,
        message: 'Interpreter created successfully!',
      });
    } catch (error) {
      next(error); // Mengirimkan kesalahan ke middleware error handling
    }
  }

  // Get all interpreters
  static async getAllInterpreters(req: Request, res: Response, next: NextFunction) {
    try {
      const interpreters = await InterpreterService.getAllInterpreters();
      return res.status(200).json({
        success: true,
        data: interpreters,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get an interpreter by ID
  static async getInterpreterById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const interpreter = await InterpreterService.getInterpreterById(Number(id));

      if (!interpreter) {
        return res.status(404).json({ success: false, message: 'Interpreter not found' });
      }

      return res.status(200).json({
        success: true,
        data: interpreter,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update an existing interpreter
  static async updateInterpreter(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { languageInterpreter, sourceCode } = req.body;

      // Validasi languageInterpreter
      if (!Object.values(LanguageInterpreter).includes(languageInterpreter)) {
        return res.status(400).json({ error: 'Invalid languageInterpreter value' });
      }

      await InterpreterService.updateInterpreter({ id: Number(id), languageInterpreter, sourceCode });
      return res.status(200).json({
        success: true,
        message: 'Interpreter updated successfully!',
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete an interpreter by ID
  static async deleteInterpreter(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await InterpreterService.deleteInterpreter(Number(id));
      return res.status(200).json({
        success: true,
        message: 'Interpreter deleted successfully!',
      });
    } catch (error) {
      next(error);
    }
  }
}
