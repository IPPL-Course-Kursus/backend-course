import { z, ZodType } from "zod";

export class AuthValidation {
  static readonly LOGIN: ZodType = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
  });

  static readonly REGISTER: ZodType = z.object({
    fullName: z.string().min(3).max(50),
    country: z.string().min(3).max(100),
    city: z.string().min(3).max(100),
    phoneNumber: z.string().min(10).max(15),
    tanggalLahir: z.string().transform((str) => new Date(str)),
    email: z.string().email(),
    password: z.string().min(6).max(20),
  });

  static readonly FORGOT_PASSWORD: ZodType = z.object({
    email: z.string().email(),
  });

  static readonly UPDATE_PROFILE: ZodType = z.object({
    fullName: z.string().min(3).max(50),
    country: z.string().min(3).max(100),
    city: z.string().min(3).max(100),
    phoneNumber: z.string().min(10).max(15),
    tanggalLahir: z.string().transform((str) => new Date(str)),
  });

  static readonly CHANGE_PASSWORD: ZodType = z.object({
    currentPassword: z.string().min(6).max(20),
    newPassword: z.string().min(6).max(20),
  });

  static readonly RESET_PASSWORD: ZodType = z.object({
    oobCode: z.string(),
    newPassword: z.string().min(6).max(20),
    confirmPassword: z.string().min(6).max(20),
  });
}
