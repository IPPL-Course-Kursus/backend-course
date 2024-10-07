import {prisma } from '../../application/database';
import { ErrorResponse } from '../../models/error_response';
import { CreateCategoryRequest, UpdateCategoryRequest } from './category_model';
import { categoryValidation } from './categoryValidation';
import { Validation } from '../../validations/validation';


export class categoryService{
  static async createCategory(request: CreateCategoryRequest): Promise<void> {
    const validatedRequest = Validation.validate(categoryValidation.CREATE, request);
    const{ categoryName, image } = validatedRequest;
    
    try{
      await prisma.category.create({
        data :{ categoryName, image},
      });
    } catch (error){
      console.error("eror during category creation:", error);
      throw new ErrorResponse(
        "Category creation failed: unable to save to database", 
        500,
        ['database']
      );
    }
  }
  static async getAll() : Promise<any> {
    try{
      const category = await prisma.category.findMany();
      return category;
    } catch (error){
      console.error("error during fetching category:", error);
      throw new ErrorResponse(
        "Failed to retrieve Category from database",
        500,
        ["database"]
      );
    }
  }
  static async getById(id : number): Promise<any>{
    try {
      const category = await prisma.category.findUnique({
        where : {id},
      });
      if(!category) {
        throw new ErrorResponse("category not found", 404, ["id"]);
      }
      return category;
    }catch (error){
      console.error("error during fetching category by ID:", error);
      throw new ErrorResponse(
        "failed to retrieve category from database",
        500,
        ["database", "id"]
      );
    }
  }
  static async updateCategory(data: {id:number; categoryName: string}){
    const {id, categoryName} = data;

    try {
      const updatedCategory = await prisma.category.update({
        where:{
          id : id,
        },
        data: {
          categoryName: categoryName,
        },
      });
      return updatedCategory;
    } catch (error){
      console.error("error updating category:", error);
      throw new Error("error updating category");
    }
  }
  static async deleteCategory(id:number): Promise<void>{
    try{
      const relatedCategory = await prisma.category.findMany({
        where :{ id : id},
        select : {categoryName:true, id:true}
      });
      if (relatedCategory.length > 0){
        const category = relatedCategory.map(category => category.categoryName).join(',');
        throw new ErrorResponse('cannot delete category : it is referenced by existing category: ${categoryName}.',400);
      }
      await prisma.category.delete({
        where: {id},
      });
    }catch (error){
      console.error("error during category deletion:", error);
      throw new ErrorResponse(
        "category deletion failed: unable to delete from database",
        500,
        ["databaase","id"]
      );
    }
  }
}
