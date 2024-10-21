import { Router } from 'express';
import { ChapterController } from './chapterController';

const chapterRoute : Router = Router();

chapterRoute.post(
  '/createChapter/:courseId',
  ChapterController.createChapter
);

chapterRoute.put(
  '/updateChapter/:id',
  ChapterController.updateChapter
);

chapterRoute.delete(
  '/deleteChapter/:id',
  ChapterController.deleteChapter
);

export default chapterRoute;