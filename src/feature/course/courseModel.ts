export type CourseRequest = {
  categoryId: number;
  courseLevelId: number;
  typeCourseId: number;
  userId: number;
  courseCode: string;
  courseName: string;
  image: string;
  about: string;
  intendedFor: string;
  courseDiscountPercent: number;
  coursePrice: number;
  coursePriceAfterDiscount?: number | null;
  publish: string;
};
