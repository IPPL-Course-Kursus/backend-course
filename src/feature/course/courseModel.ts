export type UpdateCourseRequest = {
  categoryId: string;
  courseLevelId: string;
  typeCourseId: string;
  courseName: string;
  aboutCourse: string;
  intendedFor: string;
  courseDiscountPercent: string;
  coursePrice: string;
  publish: boolean;
  certificateStatus: boolean;
};

export type CreateCourseRequest = {
  categoryId: string;
  courseLevelId: string;
  typeCourseId: string;
  courseName: string;
  aboutCourse: string;
  intendedFor: string;
  courseDiscountPercent: string;
  coursePrice: string;
  publish: boolean;
  certificateStatus: boolean;
};
