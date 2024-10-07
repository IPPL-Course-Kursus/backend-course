import { z, ZodType } from "zod";

export class TypeCourseValidation {
  static readonly CREATE: ZodType = z.object({
    typeName: z.string().min(3).max(50), // Adjust the length as needed
  });

  static readonly UPDATE: ZodType = z.object({
    typeName: z.string().min(3).max(50).optional(), // Optional for updates
  });

  static readonly GET: ZodType = z.object({
    id: z.number().int().positive(), // Ensure the ID is a positive integer
  });
}
