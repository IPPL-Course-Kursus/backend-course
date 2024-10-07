// courseLevelRoutes.ts
import express from 'express';
import { CourseLevelController } from './courseLevelController';

const router = express.Router();

router.post('/course-levels', CourseLevelController.createCourseLevel);
router.get('/course-levels', CourseLevelController.getAllCourseLevels);
router.get('/course-levels/:id', CourseLevelController.getCourseLevelById);
router.put('/course-levels/:id', CourseLevelController.updateCourseLevel);
router.delete('/course-levels/:id', CourseLevelController.deleteCourseLevel);

export default router;
