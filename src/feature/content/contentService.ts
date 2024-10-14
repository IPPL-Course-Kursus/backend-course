import { prisma } from '../../application/database'; // Sesuaikan path sesuai project kamu
import { ErrorResponse } from '../../models/error_response'; // Sesuaikan path sesuai project kamu
import { CreateContentRequest, UpdateContentRequest } from './contentModel'; // Sesuaikan path sesuai project kamu
import { ContentValidation } from './contentValidation'; // Anggap ada validasi untuk content
import { Validation } from '../../validations/validation'; // Sesuaikan path sesuai project kamu

export class ContentService {
  // Create a new Content
  static async createContent(request: CreateContentRequest): Promise<void> {
    const validatedRequest = Validation.validate(ContentValidation.CREATE, request);
    const { chapterId, interpreterId, contentTitle, contentUrl, duration, teks, interpreterStatus, contentStatus } = validatedRequest;

    try {
      await prisma.content.create({
        data: {
          chapterId,
          interpreterId,
          contentTitle,
          contentUrl,
          duration,
          teks,
          interpreterStatus,
          contentStatus,
        },
      });
    } catch (error) {
      console.error("Error during content creation:", error);
      throw new ErrorResponse(
        "Content creation failed: unable to save to database",
        500,
        ["database"]
      );
    }
  }

  // Get all Contents
  static async getAllContents(): Promise<any> {
    try {
      const contents = await prisma.content.findMany({
        include: {
          chapter: true,
          interpreter: true,
        },
      });
      return contents;
    } catch (error) {
      console.error("Error during fetching contents:", error);
      throw new ErrorResponse(
        "Failed to retrieve contents from database",
        500,
        ["database"]
      );
    }
  }

  // Get a Content by ID
  static async getContentById(id: number): Promise<any> {
    try {
      const content = await prisma.content.findUnique({
        where: { id },
        include: {
          chapter: true,
          interpreter: true,
        },
      });
      if (!content) {
        throw new ErrorResponse("Content not found", 404, ["id"]);
      }
      return content;
    } catch (error) {
      console.error("Error during fetching content by ID:", error);
      throw new ErrorResponse(
        "Failed to retrieve content from database",
        500,
        ["database", "id"]
      );
    }
  }

  // Update an existing Content
  static async updateContent(data: UpdateContentRequest): Promise<any> {
    const { id, chapterId, interpreterId, contentTitle, contentUrl, duration, teks, interpreterStatus, contentStatus } = data;

    try {
      const updatedContent = await prisma.content.update({
        where: {
          id: id,
        },
        data: {
          chapterId,
          interpreterId,
          contentTitle,
          contentUrl,
          duration,
          teks,
          interpreterStatus,
          contentStatus,
        },
      });

      return updatedContent;
    } catch (error) {
      console.error("Error updating content:", error);
      throw new ErrorResponse("Error updating content", 500, ["database", "id"]);
    }
  }

// Delete a Content
static async deleteContent(id: number): Promise<void> {
    try {
      // Cari chapters yang terkait dengan content yang akan dihapus
      const relatedChapters = await prisma.chapter.findMany({
        where: { id },
        select: { chapterTitle: true, id: true }, // Ganti chapterName jadi chapterTitle
      });
  
      if (relatedChapters.length > 0) {
        // Ambil title dari chapter yang terkait
        const chapterTitles = relatedChapters.map(chapter => chapter.chapterTitle).join(', ');
        throw new ErrorResponse(
          `Cannot delete content: it is referenced by existing chapters: ${chapterTitles}.`,
          400
        );
      }
  
      // Hapus content jika tidak ada chapter yang terkait
      await prisma.content.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Error during content deletion:", error);
      throw new ErrorResponse(
        "Content deletion failed: unable to delete from database",
        500,
        ["database", "id"]
      );
    }
  }
  
}
