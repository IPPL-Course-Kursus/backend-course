import { Course } from "@prisma/client";

export type Category = {
    id: number;
    categoryName: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    course?: Course;
  };
  
  export type CreateCategoryRequest = {
    categoryName: string;
    image: string;
  };
  
  export type UpdateCategoryRequest = {
    id: number;
    categoryName: string;
    image: string;
  };
  export type DeleteCategoryRequest = {
    id: number;
  };
  export type GetCategoryByIdRequest = {
    id: number;
  };
  