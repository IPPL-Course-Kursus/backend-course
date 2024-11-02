export type createCategoryRequest = {
  categoryName: string;
  image: string;
};

export type updateCategoryRequest = {
  categoryName: string;
};

export type deleteCategoryRequest = {
  id: number;
};
