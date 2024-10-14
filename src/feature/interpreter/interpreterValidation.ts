// src/models/interpreterValidation.ts
import { z, ZodType } from 'zod';

export class InterpreterValidation {
  static readonly CREATE: ZodType = z.object({
    languageInterpreter: z.string().min(2).max(30), // Misalnya, panjang minimum dan maksimum untuk bahasa
    sourceCode: z.string().min(10).max(500), // Misalnya, panjang minimum dan maksimum untuk source code
  });

  static readonly UPDATE: ZodType = z.object({
    languageInterpreter: z.string().min(2).max(30).optional(), // Optional untuk update
    sourceCode: z.string().min(10).max(500).optional(), // Optional untuk update
  });

  static readonly GET: ZodType = z.object({
    id: z.number().int().positive(), // Pastikan ID adalah integer positif
  });
}
