export enum Publish {
  Published = "Published",
  Archived = "Archived",
}

export type UpdateCourseRequest = {
  categoryId: number;
  courseLevelId: number;
  typeCourseId: number;
  courseCode: string;
  courseName: string;
  aboutCourse: string;
  intendedFor: string;
  courseDiscountPercent?: number;
  courseDiscountPrice?: number;
  coursePrice: number;
  publish: Publish;
  totalDuration?: number;
};

export type CreateCourseRequest = {
  categoryId: number;
  courseLevelId: number;
  typeCourseId: number;
  userId: string;
  courseName: string;
  aboutCourse: string;
  intendedFor: string;
  courseDiscountPercent?: number;
  courseDiscountPrice?: number;
  coursePrice: number;
  publish: Publish;
  totalDuration?: number;
};
