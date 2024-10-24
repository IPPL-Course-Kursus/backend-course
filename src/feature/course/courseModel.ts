export enum Publish {
  Published = "Published",
  Archived = "Archived",
}

export type UpdateCourseRequest = {
  categoryId: number;
  courseLevelId: number;
  typeCourseId: number;
  courseName: string;
  aboutCourse: string;
  intendedFor: string;
  courseDiscountPercent: number;
  coursePrice: number;
  publish: Publish;
  certificateStatus: boolean;
  totalDuration: number;
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
  publish: Publish;
  certificateStatus: boolean;
  totalDuration: number;
};
