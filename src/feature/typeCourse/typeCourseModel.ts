export type CreateTypeCourseRequest = {
  typeName: string;
};

export type UpdateTypeCourseRequest = {
  id: number;
  typeName: string;
};

export type DeleteTypeCourseRequest = {
  id: number;
};

export type GetTypeCourseByIdRequest = {
  id: number;
};
