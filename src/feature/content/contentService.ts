import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { ContentModel, updateContentModel } from "./contentModel";
import { checkProhibitedWords } from "../../utils/checkProhibiteWords";

export class ContentService {
  static async createContent(
    chapterId: string,
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
    let interpreterId: number | null = null;
    if (
      data.interpreterStatus === true ||
      (data.sourceCode && data.languageInterpreter)
    ) {
      if (!data.sourceCode || !data.languageInterpreter) {
        throw new ErrorResponse(
          "Both sourceCode and languageInterpreter must be filled in",
          400
        );
      }
      // const createInterpreter = await prisma.interpreter.create({
      //   data: {
      //     languageInterpreter: data.languageInterpreter,
      //     sourceCode: data.sourceCode,
      //   },
      // });

      // interpreterId = createInterpreter.id;
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
        interpreterId: interpreterId || null,
        interpreterStatus: data.interpreterStatus || false,
      },
    });
  }

  static async updateContent(
    contentId: string,
    data: updateContentModel
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

  static async deleteContent(contentId: string): Promise<void> {
    if (!contentId) {
      throw new ErrorResponse("Content not found", 404);
    }
    await prisma.content.delete({ where: { id: contentId } });
  }

  static async getContentById(contentId: string): Promise<any> {
    const content = await prisma.content.findUnique({
      where: { id: contentId },
    });
    if (!content) {
      throw new ErrorResponse("Content not found", 404);
    }
    return content;
  }

  static async getContentByChapterId(chapterId: string): Promise<any> {
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

  static async getDetailContent(contentId: string): Promise<any> {
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
