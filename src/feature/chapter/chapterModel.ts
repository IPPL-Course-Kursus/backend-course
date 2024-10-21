
export type Chapter = {
  id: number;
  chapterTitle: string;
  createdAt: Date;
  updatedAt: Date;
  courseId: number;
};

export type CreateChapterRequest = {
  courseId : number;
  chapterTitle: string
};

export type UpdateChapterRequest = {
  chapterTitle: string;
  
};
