import { Request, Response, NextFunction } from "express";
import { categoryService } from "./categoryService";
import { types } from "joi";

export class CategoryController {
  static async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const data= req.body;
      await categoryService.createCategory(data);
      return res.status(201).json({
        success : true,
        message : 'category create successfully!',
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      const data = req.body;
      await categoryService.updateCategory({id : Number(id),... data});
      return res.status(200).json({
        success : true,
        message : 'category updated succesfully!'
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await categoryService.deleteCategory(Number(id));
      return res.status(200).json({
        success : true,
        message : 'category deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await categoryService.getAll();
      return res.status(200).json({
        success : true,
        data : categories,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = await categoryService.getById(Number(id));
      return res.status(200).json({
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }
}
