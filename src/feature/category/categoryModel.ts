export type createCategoryRequest = {
  categoryName: string;
  categoryCode: string;
  image: string;
};

export type updateCategoryRequest = {
  categoryName: string;
  categoryCode: string;
};

export type deleteCategoryRequest = {
  id: number;
};
