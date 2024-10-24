import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { ContentModel } from "./contentModel";
import { checkProhibitedWords } from "../../utils/checkProhibiteWords";

export class ContentService {
  static async createContent(
    chapterId: number,
    data: ContentModel
  ): Promise<void> {
    if (
      !data.contentTitle ||
      !data.contentUrl ||
      !data.duration ||
      !chapterId ||
      !data.teks ||
      !data.sort
    ) {
      throw new ErrorResponse(
        "There is an empty column that must be filled in",
        400
      );
    }

    const existSort = await prisma.content.findFirst({
      where: { chapterId: chapterId, sort: data.sort },
    });

    if (existSort) {
      throw new ErrorResponse("Sort must be unique", 400);
    }

    if (
      checkProhibitedWords(data.contentTitle) ||
      checkProhibitedWords(data.teks)
    ) {
      throw new ErrorResponse(
        "Content title or teks must not contain prohibited words",
        400,
        ["contentTitle", "teks"]
      );
    }

    await prisma.content.create({
      data: {
        sort: data.sort,
        chapterId: chapterId,
        contentTitle: data.contentTitle,
        contentUrl: data.contentUrl,
        duration: data.duration,
        teks: data.teks,
        interpreterId: data.interpreterId || null,
        interpreterStatus: data.interpreterStatus || false,
      },
    });
  }

  static async updateContent(
    contentId: number,
    data: ContentModel
  ): Promise<void> {
    if (
      !data.contentTitle ||
      !data.contentUrl ||
      !data.duration ||
      !data.teks ||
      !data.sort
    ) {
      throw new ErrorResponse(
        "There is an empty column that must be filled in",
        400
      );
    }

    if (
      checkProhibitedWords(data.contentTitle) ||
      checkProhibitedWords(data.teks)
    ) {
      throw new ErrorResponse(
        "Content title or teks must not contain prohibited words",
        400,
        ["contentTitle", "teks"]
      );
    }

    await prisma.content.update({
      where: { id: contentId },
      data: {
        sort: data.sort,
        contentTitle: data.contentTitle,
        contentUrl: data.contentUrl,
        duration: data.duration,
        teks: data.teks,
        interpreterId: data.interpreterId || null,
        interpreterStatus: data.interpreterStatus || false,
      },
    });
  }

  static async deleteContent(contentId: number): Promise<void> {
    if (!contentId) {
      throw new ErrorResponse("Content not found", 404);
    }
    await prisma.content.delete({ where: { id: contentId } });
  }

  static async getContentById(contentId: number): Promise<any> {
    const content = await prisma.content.findUnique({
      where: { id: contentId },
    });
    if (!content) {
      throw new ErrorResponse("Content not found", 404);
    }
    return content;
  }

  static async getContentByChapterId(chapterId: number): Promise<any> {
    if (!chapterId) {
      throw new ErrorResponse("Chapter not found", 404);
    }
    const content = await prisma.content.findMany({
      where: { chapterId: chapterId },
      orderBy: { sort: "asc" },
    });
    if (!content) {
      throw new ErrorResponse("Content not found", 404);
    }
    return content;
  }

  static async getDetailContent(contentId: number): Promise<any> {
    if (!contentId) {
      throw new ErrorResponse("Content not found", 404);
    }
    const content = await prisma.content.findUnique({
      where: { id: contentId },
      include: {
        interpreter: true,
      },
    });
    if (!content) {
      throw new ErrorResponse("Content not found", 404);
    }
    return content;
  }
}
