import { Request, Response, NextFunction } from "express";
import { CategoryService } from "./categoryService";

export class CategoryController {
  static async getAllCategories(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const categories = await CategoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  static async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const image = req.file;
      await CategoryService.createCategory(data, image);
      res.status(201).json({ message: "Category created successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async getCategoryById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const categoryId = parseInt(id, 10);
      const category = await CategoryService.getCategoryById(categoryId);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const categoryId = parseInt(id, 10);
      await CategoryService.deleteCategory(categoryId);
      res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const categoryId = parseInt(id, 10);
      const data = req.body;
      const image = req.file ? req.file : undefined;
      await CategoryService.updateCategory(categoryId, data, image);
      res.status(200).json({ message: "Category updated successfully" });
    } catch (error) {
      next(error);
    }
  }
}
