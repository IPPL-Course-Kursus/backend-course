import { z, ZodType } from 'zod';

export class InterpreterValidation {
  static readonly CREATE: ZodType = z.object({
    languageInterpreter: z.string().min(3).max(50), // Panjang minimum dan maksimum
    sourceCode: z.string().min(1).max(100), // Misalnya, kode sumber tidak boleh kosong dan memiliki batas maksimum
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().int().positive(), // ID wajib ada untuk update
    languageInterpreter: z.string().min(3).max(50).optional(), // Optional untuk update
    sourceCode: z.string().min(1).max(100).optional(), // Optional untuk update
  });

  static readonly GET: ZodType = z.object({
    id: z.number().int().positive(), // Pastikan ID adalah integer positif
  });
}
