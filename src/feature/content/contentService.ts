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
      (data.interpreterStatus === false && !data.sourceCode) ||
      !data.languageInterpreterId
    ) {
      throw new ErrorResponse(
        "interpreterStatus must be true and both sourceCode and languageInterpreter must be filled in",
        400,
        ["sourceCode", "languageInterpreterId", "interpreterStatus"]
      );
    }

    if (
      data.interpreterStatus === true ||
      (data.sourceCode && data.languageInterpreterId)
    ) {
      if (!data.sourceCode || !data.languageInterpreterId) {
        throw new ErrorResponse(
          "Both sourceCode and languageInterpreter must be filled in",
          400
        );
      }
      const createInterpreter = await prisma.interpreter.create({
        data: {
          languageInterpreterId: data.languageInterpreterId,
          sourceCode: data.sourceCode,
        },
      });

      interpreterId = createInterpreter.id;
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

    const chapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
      select: { courseId: true },
    });

    if (chapter) {
      const courseId = chapter.courseId;

      const totalDuration = await prisma.content.aggregate({
        where: { chapter: { courseId: courseId } },
        _sum: { duration: true },
      });

      await prisma.course.update({
        where: { id: courseId },
        data: { totalDuration: totalDuration._sum.duration || 0 },
      });
    }
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

    const existingContent = await prisma.content.findUnique({
      where: { id: contentId },
      include: {
        interpreter: true,
      },
    });

    if (!existingContent) {
      throw new ErrorResponse("Content not found", 404);
    }

    if (data.interpreterStatus === true) {
      if (!data.sourceCode || !data.languageInterpreterId) {
        throw new ErrorResponse(
          "Both sourceCode and languageInterpreter must be filled in",
          400
        );
      }

      if (existingContent.interpreterId) {
        await prisma.interpreter.update({
          where: { id: existingContent.interpreterId },
          data: {
            languageInterpreterId: data.languageInterpreterId,
            sourceCode: data.sourceCode,
          },
        });
      } else {
        const newInterpreter = await prisma.interpreter.create({
          data: {
            languageInterpreterId: data.languageInterpreterId,
            sourceCode: data.sourceCode,
          },
        });
        await prisma.content.update({
          where: { id: contentId },
          data: {
            interpreterId: newInterpreter.id,
            interpreterStatus: true,
          },
        });
      }
    } else if (existingContent.interpreterId) {
      await prisma.interpreter.delete({
        where: { id: existingContent.interpreterId },
      });
      await prisma.content.update({
        where: { id: contentId },
        data: {
          interpreterStatus: data.interpreterStatus,
          interpreterId: null,
        },
      });
    }

    await prisma.content.update({
      where: { id: contentId },
      data: {
        sort: data.sort,
        contentTitle: data.contentTitle,
        contentUrl: data.contentUrl,
        duration: data.duration,
        teks: data.teks,
        interpreterStatus:
          data.interpreterStatus || existingContent.interpreterStatus,
      },
    });

    const chapter = await prisma.chapter.findUnique({
      where: { id: existingContent.chapterId },
      select: { courseId: true },
    });

    if (chapter) {
      const courseId = chapter.courseId;

      const totalDuration = await prisma.content.aggregate({
        where: { chapter: { courseId: courseId } },
        _sum: { duration: true },
      });

      await prisma.course.update({
        where: { id: courseId },
        data: { totalDuration: totalDuration._sum.duration || 0 },
      });
    }
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
      include: {
        interpreter: true,
      },
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
