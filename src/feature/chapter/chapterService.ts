import { prisma } from '../../application/database';
import { ErrorResponse } from '../../models/error_response';
import { CreateChapterRequest, UpdateChapterRequest } from './chapterModel';
import { chapterValidation } from './chapterValidation';
import { Validation } from '../../validations/validation';
import { Prisma } from '@prisma/client';

export class chapterService {
  
  static async createChapter(courseId : number ,request: CreateChapterRequest): Promise<void> {
    const validatedRequest = Validation.validate(chapterValidation.CREATE, request);
    const { chapterTitle} = validatedRequest;
  
    try {
      await prisma.chapter.create({
        data: {
          courseId,
          chapterTitle,
        },
      });
    } catch (error) {
      console.error("Error during chapter creation:", error);
      throw new ErrorResponse(
        "Chapter creation failed: unable to save to database",
        500,
        ['database']
      );
    }
  }


  static async updateChapter(id: number,request: UpdateChapterRequest): Promise<void> {
    const validatedRequest = Validation.validate(chapterValidation.UPDATE, request);
    const { chapterTitle } = validatedRequest;
  
    try {
      await prisma.chapter.update({
        where: { id },
        data: {
          chapterTitle,
        },
      });
    } catch (error) {
      console.error("Error updating chapter:", error);
      throw new ErrorResponse(
        "Error updating chapter",
        500,
        ['database', 'id']
      );
    }
  }

  static async deleteChapter(id: number): Promise<void> {
    if (!id || typeof id !== 'number') {
      throw new ErrorResponse("Invalid Chapter ID", 400, ['id']);
    }
  
    try {
      const chapter = await prisma.chapter.findUnique({ where: { id } });
  
      if (!chapter) {
        throw new ErrorResponse("Chapter not found", 404, ['id']);
      }

      await prisma.chapter.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Error during chapter deletion:", error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new ErrorResponse("Chapter not found", 404, ['id']);
        }
      }
  
      throw new ErrorResponse(
        "Chapter deletion failed",
        500,
        ["database", "id"]
      );
    }
  }
}
