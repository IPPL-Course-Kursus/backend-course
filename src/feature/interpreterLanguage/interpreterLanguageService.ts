import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { InterpreterLanguageRequest } from "./interpreterLanguageModel";

export class InterpreterLanguageService {
  static async getAllLanguages(): Promise<any> {
    const languages = await prisma.interpreterLanguage.findMany({
      orderBy: { id: "asc" },
    });
    if (!languages) {
      throw new ErrorResponse("No languages found", 404, ["languages"]);
    }
    return languages;
  }

  static async getLanguageById(id: number): Promise<any> {
    if (!id) {
      throw new ErrorResponse("id must be filled in", 400, ["id"]);
    }
    const language = await prisma.interpreterLanguage.findUnique({
      where: { id: id },
    });
    if (!language) {
      throw new ErrorResponse("Language not found", 404, ["language"]);
    }
    return language;
  }

  static async createLanguage(
    interpreterLanguage: InterpreterLanguageRequest
  ): Promise<any> {
    if (
      !interpreterLanguage.languageInterpreter ||
      !interpreterLanguage.version
    ) {
      throw new ErrorResponse(
        "languageInterpreter and version must be filled in",
        400,
        ["languageInterpreter", "version"]
      );
    }
    await prisma.interpreterLanguage.create({
      data: {
        languageInterpreter:
          interpreterLanguage.languageInterpreter.toLowerCase(),
        version: interpreterLanguage.version,
      },
    });
  }

  static async updateLanguage(
    id: number,
    interpreterLanguage: InterpreterLanguageRequest
  ): Promise<any> {
    if (
      !interpreterLanguage.languageInterpreter ||
      !interpreterLanguage.version
    ) {
      throw new ErrorResponse(
        "languageInterpreter and version must be filled in",
        400,
        ["languageInterpreter", "version"]
      );
    }
    await prisma.interpreterLanguage.update({
      where: { id: id },
      data: {
        languageInterpreter:
          interpreterLanguage.languageInterpreter.toLowerCase(),
        version: interpreterLanguage.version,
      },
    });
  }

  static async deleteLanguage(id: number): Promise<any> {
    if (!id) {
      throw new ErrorResponse("id must be filled in", 400, ["id"]);
    }

    const relatedLanguages = await prisma.interpreter.findMany({
      where: {
        languageInterpreterId: id,
      },
    });

    if (relatedLanguages.length > 0) {
      throw new ErrorResponse(
        "Cannot delete language: it is referenced by existing interpreters",
        400,
        ["languageInterpreterId"]
      );
    }

    await prisma.interpreterLanguage.delete({
      where: { id: id },
    });
  }
}