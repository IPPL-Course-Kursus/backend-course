export type UpdateCourseRequest = {
  categoryId: number;
  courseLevelId: number;
  typeCourseId: number;
  courseName: string;
  aboutCourse: string;
  intendedFor: string;
  courseDiscountPercent: number;
  coursePrice: number;
  publish: boolean;
  certificateStatus: boolean;
};

export type CreateCourseRequest = {
  categoryId: number;
  courseLevelId: number;
  typeCourseId: number;
  courseName: string;
  aboutCourse: string;
  intendedFor: string;
  courseDiscountPercent: number;
  coursePrice: number;
  publish: boolean;
  certificateStatus: boolean;
};
