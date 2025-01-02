import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { checkProhibitedWords } from "../../utils/checkProhibiteWords";
export class ChapterService {
  static async createChapter(
    courseId: string,
    chapterTitle: string,
    sort: number
  ): Promise<any> {
    if (!chapterTitle && !sort) {
      throw new ErrorResponse("Chapter title & Sort is required", 400);
    }

    const existSort = await prisma.chapter.findFirst({
      where: { courseId: courseId, sort: sort },
    });

    if (existSort) {
      const chaptersToUpdate = await prisma.chapter.findMany({
        where: { courseId: courseId, sort: { gte: sort } },
      });

      if (chaptersToUpdate.length > 0) {
        await prisma.chapter.updateMany({
          where: {
            id: { in: chaptersToUpdate.map((chapter) => chapter.id) },
          },
          data: {
            sort: {
              increment: 1,
            },
          },
        });
      }
    }

    if (checkProhibitedWords(chapterTitle)) {
      throw new ErrorResponse(
        "Chapter title must not contain prohibited words",
        400,
        ["chapterTitle"]
      );
    }

    await prisma.chapter.create({
      data: {
        sort: sort,
        courseId: courseId,
        chapterTitle: chapterTitle,
      },
    });
  }

  static async updateChapter(
    chapterId: string,
    chapterTitle: string,
    sort: number
  ): Promise<any> {
    if (!chapterTitle && !sort) {
      throw new ErrorResponse("Chapter title & Sort is required", 400);
    }

    if (checkProhibitedWords(chapterTitle)) {
      throw new ErrorResponse(
        "Chapter title must not contain prohibited words",
        400,
        ["chapterTitle"]
      );
    }

    const currentChapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
    });

    if (!currentChapter) {
      throw new ErrorResponse("Chapter not found", 404);
    }
    if (currentChapter.sort !== sort) {
      const existSort = await prisma.chapter.findFirst({
        where: { courseId: currentChapter.courseId, sort: sort },
      });

      if (existSort) {
        throw new ErrorResponse("Sort must be unique", 400);
      }

      if (sort < currentChapter.sort) {
        const chaptersToUpdate = await prisma.chapter.findMany({
          where: { courseId: currentChapter.courseId, sort: { gte: sort } },
        });

        if (chaptersToUpdate.length > 0) {
          await prisma.chapter.updateMany({
            where: {
              id: { in: chaptersToUpdate.map((chapter) => chapter.id) },
            },
            data: {
              sort: {
                increment: 1,
              },
            },
          });
        }
      } else if (sort > currentChapter.sort) {
        const chaptersToUpdate = await prisma.chapter.findMany({
          where: {
            courseId: currentChapter.courseId,
            sort: { gt: currentChapter.sort, lte: sort },
          },
        });

        if (chaptersToUpdate.length > 0) {
          await prisma.chapter.updateMany({
            where: {
              id: { in: chaptersToUpdate.map((chapter) => chapter.id) },
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

    await prisma.chapter.update({
      where: { id: chapterId },
      data: {
        sort: sort,
        chapterTitle: chapterTitle,
      },
    });
  }

  static async deleteChapter(chapterId: string): Promise<any> {
    const relatedContents = await prisma.content.findMany({
      where: { chapterId: chapterId },
    });

    if (relatedContents.length > 0) {
      const contentNames = relatedContents
        .slice(0, 5)
        .map((content) => content.contentTitle)
        .join(", ");
      throw new ErrorResponse(
        `Cannot delete type course: it is referenced by existing courses: ${contentNames}.`,
        400
      );
    }

    await prisma.chapter.delete({
      where: { id: chapterId },
    });
  }

  static async getDetailChapter(chapterId: string): Promise<any> {
    const chapterDetail = await prisma.chapter.findUnique({
      where: { id: chapterId },
      include: { contents: true },
    });

    if (!chapterDetail) {
      throw new ErrorResponse("Chapter not found", 404);
    }
    return chapterDetail;
  }

  static async getChapterByCourseId(courseId: string): Promise<any> {
    const chapters = await prisma.chapter.findMany({
      where: { courseId: courseId },
      orderBy: { sort: "asc" },
    });

    if (chapters.length === 0) {
      throw new ErrorResponse("Chapter not found", 404);
    }
    return chapters;
  }

  static async getChapterById(chapterId: string): Promise<any> {
    const chapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
    });
    if (!chapter) {
      throw new ErrorResponse("Chapter not found", 404);
    }
    return chapter;
  }
}
