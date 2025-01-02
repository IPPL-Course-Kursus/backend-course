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
    const existContent = await prisma.content.findFirst({
      where: { chapterId: chapterId, contentTitle: data.contentTitle },
    });

    if (existContent) {
      throw new ErrorResponse("Content already exists", 400);
    }
    if (data.interpreterStatus === true) {
      if (!data.sourceCode || !data.languageInterpreterId) {
        throw new ErrorResponse(
          "Both sourceCode and languageInterpreter must be filled in when interpreterStatus is true",
          400,
          ["sourceCode", "languageInterpreterId"]
        );
      }

      const createInterpreter = await prisma.interpreter.create({
        data: {
          languageInterpreterId: data.languageInterpreterId,
          sourceCode: data.sourceCode,
        },
      });

      interpreterId = createInterpreter.id;
    } else if (data.interpreterStatus === false) {
      if (data.sourceCode || data.languageInterpreterId) {
        throw new ErrorResponse(
          "When interpreterStatus is false, sourceCode and languageInterpreterId should not be filled in",
          400,
          ["sourceCode", "languageInterpreterId"]
        );
      }
    } else {
      throw new ErrorResponse("interpreterStatus must be true or false", 400);
    }

    const existSort = await prisma.content.findFirst({
      where: { chapterId: chapterId, sort: data.sort },
    });

    if (existSort) {
      const contentsToUpdate = await prisma.content.findMany({
        where: { chapterId: chapterId, sort: { gte: data.sort } },
      });

      if (contentsToUpdate.length > 0) {
        await prisma.content.updateMany({
          where: {
            id: { in: contentsToUpdate.map((content) => content.id) },
          },
          data: {
            sort: {
              increment: 1,
            },
          },
        });
      }
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
          interpreterId: null,
        },
      });
    }

    if (existingContent.sort !== data.sort) {
      if (data.sort < existingContent.sort) {
        const contentsToUpdate = await prisma.content.findMany({
          where: {
            chapterId: existingContent.chapterId,
            sort: { gte: data.sort },
          },
        });

        if (contentsToUpdate.length > 0) {
          await prisma.content.updateMany({
            where: {
              id: { in: contentsToUpdate.map((content) => content.id) },
            },
            data: {
              sort: {
                increment: 1,
              },
            },
          });
        }
      } else if (data.sort > existingContent.sort) {
        const contentsToUpdate = await prisma.content.findMany({
          where: {
            chapterId: existingContent.chapterId,
            sort: { gt: existingContent.sort, lte: data.sort },
          },
        });

        if (contentsToUpdate.length > 0) {
          await prisma.content.updateMany({
            where: {
              id: { in: contentsToUpdate.map((content) => content.id) },
            },
            data: {
              sort: {
                decrement: 1,
              },
            },
          });
        }
      }
    }

    await prisma.content.update({
      where: { id: contentId },
      data: {
        sort: data.sort,
        contentTitle: data.contentTitle,
        contentUrl: data.contentUrl,
        duration: data.duration,
        teks: data.teks,
        interpreterStatus: data.interpreterStatus,
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

    const content = await prisma.content.findUnique({
      where: { id: contentId },
      include: {
        interpreter: true,
      },
    });

    if (!content) {
      throw new ErrorResponse("Content not found", 404);
    }

    if (content.interpreterId) {
      await prisma.interpreter.delete({
        where: { id: content.interpreterId },
      });
    }

    await prisma.content.delete({
      where: { id: contentId },
    });

    const contentsToUpdate = await prisma.content.findMany({
      where: {
        chapterId: content.chapterId,
        sort: { gte: content.sort },
      },
    });

    if (contentsToUpdate.length > 0) {
      await prisma.content.updateMany({
        where: {
          id: { in: contentsToUpdate.map((content) => content.id) },
        },
        data: {
          sort: {
            decrement: 1,
          },
        },
      });
    }
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
