import { z, ZodType } from 'zod';

export class ContentValidation {
  static readonly CREATE: ZodType = z.object({
    chapterId: z.number().int().positive(), // ID harus integer positif
    interpreterId: z.number().int().positive(), // ID interpreter harus integer positif
    contentTitle: z.string().min(3).max(255), // Judul harus minimal 3 karakter dan maksimal 255 karakter
    contentUrl: z.string().url(), // URL harus valid
    duration: z.string().min(1).max(10), // Durasi dengan format yang sesuai
    teks: z.string().optional(), // Teks bisa optional
    interpreterStatus: z.boolean(), // Status interpreter harus boolean
    contentStatus: z.boolean(), // Status content juga boolean
  });

  static readonly UPDATE: ZodType = z.object({
    chapterId: z.number().int().positive().optional(), // Boleh tidak ada pada update
    interpreterId: z.number().int().positive().optional(),
    contentTitle: z.string().min(3).max(255).optional(),
    contentUrl: z.string().url().optional(),
    duration: z.string().min(1).max(10).optional(),
    teks: z.string().optional(),
    interpreterStatus: z.boolean().optional(),
    contentStatus: z.boolean().optional(),
  });

  static readonly GET: ZodType = z.object({
    id: z.number().int().positive(), // ID harus integer positif
  });
}
