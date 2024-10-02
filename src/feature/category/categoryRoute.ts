import { Router } from 'express';
import {CategoryController} from './categoryController';

const CategoryRoute : Router = Router();

CategoryRoute.post(
  '/',
  CategoryController.createCategory
);

CategoryRoute.get(
  '/',
  CategoryController.getAll
);

CategoryRoute.get(
  '/:id',
  CategoryController.getById
);

CategoryRoute.put(
  '/:id',
  CategoryController.updateCategory
);

CategoryRoute.delete(
  '/:id',
  CategoryController.delete
);

export default CategoryRoute;