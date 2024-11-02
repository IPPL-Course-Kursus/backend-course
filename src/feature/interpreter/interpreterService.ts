import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import {
  CreateInterpreterRequest,
  UpdateInterpreterRequest,
} from "./interpreterModel";
import { InterpreterValidation } from "./interpreterValidation";
import { Validation } from "../../validations/validation";

export class InterpreterService {
  // Membuat Interpreter baru
  static async createInterpreter(
    request: CreateInterpreterRequest
  ): Promise<void> {
    const validatedRequest = Validation.validate(
      InterpreterValidation.CREATE,
      request
    );
    const { languageInterpreterId, sourceCode } = validatedRequest;

    try {
      await prisma.interpreter.create({
        data: {
          languageInterpreterId,
          sourceCode,
        },
      });
    } catch (error) {
      console.error("Error during interpreter creation:", error);
      throw new ErrorResponse(
        "Interpreter creation failed: unable to save to database",
        500
      );
    }
  }

  // Mendapatkan semua Interpreter
  static async getAllInterpreters(): Promise<any[]> {
    try {
      return await prisma.interpreter.findMany();
    } catch (error) {
      console.error("Error fetching interpreters:", error);
      throw new ErrorResponse(
        "Failed to retrieve interpreters from database",
        500
      );
    }
  }

  // Mendapatkan Interpreter berdasarkan ID
  static async getInterpreterById(id: number): Promise<any> {
    try {
      const interpreter = await prisma.interpreter.findUnique({
        where: { id },
      });
      if (!interpreter) {
        throw new ErrorResponse("Interpreter not found", 404);
      }
      return interpreter;
    } catch (error) {
      console.error("Error fetching interpreter by ID:", error);
      throw new ErrorResponse(
        "Failed to retrieve interpreter from database",
        500
      );
    }
  }

  // Mengupdate Interpreter
  static async updateInterpreter(data: UpdateInterpreterRequest): Promise<any> {
    const validatedRequest = Validation.validate(
      InterpreterValidation.UPDATE,
      data
    );
    const { id, languageInterpreterId, sourceCode } = validatedRequest;

    try {
      return await prisma.interpreter.update({
        where: { id },
        data: {
          languageInterpreterId,
          sourceCode,
        },
      });
    } catch (error) {
      console.error("Error updating interpreter:", error);
      throw new ErrorResponse("Interpreter update failed", 500);
    }
  }

  // Menghapus Interpreter berdasarkan ID
  static async deleteInterpreter(id: number): Promise<void> {
    try {
      const relatedContents = await prisma.content.findMany({
        where: { interpreterId: id },
        select: { id: true, contentTitle: true },
      });

      if (relatedContents.length > 0) {
        const contentTitles = relatedContents
          .map((content) => content.contentTitle)
          .join(", ");
        throw new ErrorResponse(
          `Cannot delete interpreter: it is referenced by existing contents: ${contentTitles}.`,
          400
        );
      }

      await prisma.interpreter.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Error deleting interpreter:", error);
      throw new ErrorResponse("Interpreter deletion failed", 500);
    }
  }
}
