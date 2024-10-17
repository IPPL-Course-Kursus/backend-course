import { Request, Response, NextFunction } from "express";
import { prisma } from "../../application/database"; // Menggunakan prisma client
import { LanguageInterpreter } from "@prisma/client";
import { exec } from "child_process";

export class InterpreterController {
  // Create and execute interpreter
  static async createInterpreter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { languageInterpreter, sourceCode } = req.body;

      // Save code to database
      await prisma.interpreter.create({
        data: {
          languageInterpreter,
          sourceCode,
        },
      });

      // Determine command for code execution
      let command: string | null = null;

      switch (languageInterpreter) {
        case "Python":
          command = `python -c "${sourceCode}"`;
          break;
        case "Java":
          command = `echo "${sourceCode}" > Main.java && javac Main.java && java Main`;
          break;
        case "Kotlin":
          command = `echo "${sourceCode}" > Main.kt && kotlinc Main.kt -include-runtime -d Main.jar && java -jar Main.jar`;
          break;
        case "JavaScript":
          command = `node -e "${sourceCode}"`;
          break;
        case "PHP":
          command = `php -r "${sourceCode}"`;
          break;
        case "Swift":
          command = `swift -e "${sourceCode}"`;
          break;
        case "Dart":
          command = `dart -e "${sourceCode}"`;
          break;
        default:
          return res.status(400).json({
            success: false,
            message: "Language interpreter not supported yet.",
          });
      }

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error("Execution error:", error); // Log error
          console.error("stderr:", stderr); // Log error output
          return res.status(500).json({
            success: false,
            message: "Error during code execution",
            error: stderr || error.message,
          });
        }

        return res.status(200).json({
          success: true,
          message: "Interpreter created and code executed successfully!",
          output: stdout,
        });
      });
    } catch (error) {
      next(error); // Mengirimkan kesalahan ke middleware error handling
    }
  }

  // Get all interpreters
  static async getAllInterpreters(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const interpreters = await prisma.interpreter.findMany();

      return res.status(200).json({
        success: true,
        data: interpreters,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get an interpreter by ID
  static async getInterpreterById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const interpreter = await prisma.interpreter.findUnique({
        where: { id: Number(id) },
      });

      if (!interpreter) {
        return res
          .status(404)
          .json({ success: false, message: "Interpreter not found" });
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
  static async updateInterpreter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const { languageInterpreter, sourceCode } = req.body;

      await prisma.interpreter.update({
        where: { id: Number(id) },
        data: {
          languageInterpreter,
          sourceCode,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Interpreter updated successfully!",
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete an interpreter by ID
  static async deleteInterpreter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      await prisma.interpreter.delete({
        where: { id: Number(id) },
      });

      return res.status(200).json({
        success: true,
        message: "Interpreter deleted successfully!",
      });
    } catch (error) {
      next(error);
    }
  }

  // Get list of languages from LanguageInterpreter enum
  static async getLanguages(req: Request, res: Response, next: NextFunction) {
    try {
      const languages = Object.values(LanguageInterpreter);
      res.json(languages);
    } catch (error) {
      next(error);
    }
  }
}
