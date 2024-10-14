import { prisma } from '../../application/database'; // Sesuaikan path sesuai kebutuhan
import { ErrorResponse } from '../../models/error_response'; // Sesuaikan path sesuai kebutuhan
import { CreateInterpreterRequest, UpdateInterpreterRequest } from './interpreterModel'; // Sesuaikan path sesuai kebutuhan
import { InterpreterValidation } from './interpreterValidation'; // Asumsi ada validasi untuk interpreter
import { Validation } from '../../validations/validation'; // Sesuaikan path sesuai kebutuhan
import { LanguageInterpreter } from '@prisma/client';


export class InterpreterService {
  // Create a new Interpreter
  static async createInterpreter(request: CreateInterpreterRequest): Promise<void> {
    const validatedRequest = Validation.validate(InterpreterValidation.CREATE, request);
    const { languageInterpreter, sourceCode } = validatedRequest;

    try {
      await prisma.interpreter.create({
        data: { languageInterpreter: languageInterpreter as LanguageInterpreter, sourceCode },
      });
    } catch (error) {
      console.error("Error during interpreter creation:", error);
      throw new ErrorResponse(
        "Interpreter creation failed: unable to save to database",
        500,
        ["database"]
      );
    }
  }

  // Get all Interpreters
  static async getAllInterpreters(): Promise<any> {
    try {
      const interpreters = await prisma.interpreter.findMany();
      return interpreters;
    } catch (error) {
      console.error("Error during fetching interpreters:", error);
      throw new ErrorResponse(
        "Failed to retrieve interpreters from database",
        500,
        ["database"]
      );
    }
  }

  // Get an Interpreter by ID
  static async getInterpreterById(id: number): Promise<any> {
    try {
      const interpreter = await prisma.interpreter.findUnique({
        where: { id },
      });
      if (!interpreter) {
        throw new ErrorResponse("Interpreter not found", 404, ["id"]);
      }
      return interpreter;
    } catch (error) {
      console.error("Error during fetching interpreter by ID:", error);
      throw new ErrorResponse(
        "Failed to retrieve interpreter from database",
        500,
        ["database", "id"]
      );
    }
  }

  // Update an existing Interpreter
  static async updateInterpreter(data: UpdateInterpreterRequest): Promise<any> {
    const { id, languageInterpreter, sourceCode } = data;

    try {
      // Memastikan bahwa ID ada dan valid
      const updatedInterpreter = await prisma.interpreter.update({
        where: { id }, // ID harus dikirim dengan benar di where clause
        data: { languageInterpreter: languageInterpreter as LanguageInterpreter, sourceCode }, // Update field
      });

      return updatedInterpreter;
    } catch (error) {
      console.error("Error updating interpreter:", error);
      throw new Error("Error updating interpreter");
    }
  }

  static async deleteInterpreter(id: number): Promise<void> {
    try {
      // Cek apakah ada referensi lain di tabel contents
      const relatedContents = await prisma.content.findMany({
        where: { interpreterId: id }, // Mencari konten dengan interpreterId yang sama
        select: { id: true, contentTitle: true } // Ambil ID dan judul konten untuk informasi
      });
  
      if (relatedContents.length > 0) {
        const contentTitles = relatedContents.map(content => content.contentTitle).join(', ');
        throw new ErrorResponse(`Cannot delete interpreter: it is referenced by existing contents: ${contentTitles}.`, 400);
      }
  
      // Sekarang hapus Interpreter jika tidak ada yang terkait
      await prisma.interpreter.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Error during interpreter deletion:", error);
      throw new ErrorResponse(
        "Interpreter deletion failed: unable to delete from database",
        500,
        ["database", "id"]
      );
    }
  }
  
  
}
