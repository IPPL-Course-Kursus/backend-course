import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import { checkProhibitedWords } from "../../utils/checkProhibiteWords";
export class ChapterService {
  static async createChapter(
    courseId: number,
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
      throw new ErrorResponse("Sort must be unique", 400);
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
    chapterId: number,
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

    await prisma.chapter.update({
      where: { id: chapterId },
      data: {
        sort: sort,
        chapterTitle: chapterTitle,
      },
    });
  }

  static async deleteChapter(chapterId: number): Promise<any> {
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

  static async getDetailChapter(chapterId: number): Promise<any> {
    const chapterDetail = await prisma.chapter.findUnique({
      where: { id: chapterId },
      include: { contents: true },
    });

    if (!chapterDetail) {
      throw new ErrorResponse("Chapter not found", 404);
    }
    return chapterDetail;
  }

  static async getChapterByCourseId(courseId: number): Promise<any> {
    const chapters = await prisma.chapter.findMany({
      where: { courseId: courseId },
      orderBy: { sort: "asc" },
    });

    if (chapters.length === 0) {
      throw new ErrorResponse("Chapter not found", 404);
    }
    return chapters;
  }

  static async getChapterById(chapterId: number): Promise<any> {
    const chapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
    });
    if (!chapter) {
      throw new ErrorResponse("Chapter not found", 404);
    }
    return chapter;
  }
}
