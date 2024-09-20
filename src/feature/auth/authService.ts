import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../../utils/format";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
} from "./authModel";
import { AuthValidation } from "./authValidation";
import { Validation } from "../../validations/validation";
import { sendEmail } from "../../utils/nodemailer";
const dotenv = require("dotenv");
dotenv.config();

export class AuthService {
  static async login(request: LoginRequest): Promise<LoginResponse> {
    const requests = Validation.validate(AuthValidation.LOGIN, request);
    const auth = await prisma.auth.findUnique({
      where: {
        email: requests.email,
      },
    });

    if (!auth) {
      throw new ErrorResponse("Invalid email or password", 400, [
        "email",
        "password",
      ]);
    }

    if (!auth.verified) {
      throw new ErrorResponse("Account not verified", 403, ["verified"]);
    }

    const isPasswordValid = await comparePassword(
      requests.password,
      auth.password
    );

    if (!isPasswordValid) {
      throw new ErrorResponse("Invalid email or password", 400, [
        "email",
        "password",
      ]);
    }

    const userRole = await prisma.user.findUnique({
      where: {
        id: auth.userId,
      },
    });

    if (!userRole) {
      throw new ErrorResponse("Role Not Found", 404, ["role"]);
    }

    const token = jwt.sign(
      { id: userRole.id, role: userRole.role },
      process.env.JWT_SECRET_KEY!,
      {
        expiresIn: "7d",
      }
    );

    const data = {
      token: token,
      role: userRole.role,
    };

    return data;
  }

  static async register(request: RegisterRequest): Promise<void> {
    const requests = Validation.validate(AuthValidation.REGISTER, request);

    const existingAuth = await prisma.auth.findUnique({
      where: {
        email: requests.email,
      },
    });

    if (existingAuth) {
      throw new ErrorResponse("Email already in use", 400, ["email"]);
    }

    const hashedPassword = await hashPassword(requests.password);

    try {
      await prisma.$transaction(async (prisma) => {
        const newUser = await prisma.user.create({
          data: {
            fullName: requests.fullName,
            phoneNumber: requests.phoneNumber,
            role: "User",
            tanggalLahir: new Date(requests.tanggalLahir),
            city: requests.city,
            country: requests.country,
          },
        });

        await prisma.auth.create({
          data: {
            userId: newUser.id,
            email: requests.email,
            password: hashedPassword,
            verified: true,
          },
        });
      });
    } catch (error) {
      throw new ErrorResponse(
        "Registration failed: unable to create user or auth record",
        500,
        ["registration", "auth"]
      );
    }
  }

  static async registerInstruktur(request: RegisterRequest): Promise<void> {
    const requests = Validation.validate(AuthValidation.REGISTER, request);
    const existingAuth = await prisma.auth.findUnique({
      where: {
        email: requests.email,
      },
    });

    if (existingAuth) {
      throw new ErrorResponse("Email already in use", 400, ["email"]);
    }

    const hashedPassword = await hashPassword(requests.password);

    try {
      await prisma.$transaction(async (prisma) => {
        const newUser = await prisma.user.create({
          data: {
            fullName: requests.fullName,
            phoneNumber: requests.phoneNumber,
            role: "Instruktur",
            tanggalLahir: new Date(requests.tanggalLahir),
            city: requests.city,
            country: requests.country,
          },
        });

        await prisma.auth.create({
          data: {
            userId: newUser.id,
            email: requests.email,
            password: hashedPassword,
            verified: true,
          },
        });
      });
    } catch (error) {
      throw new ErrorResponse(
        "Registration failed: unable to create instruktur or auth record",
        500,
        ["registration", "auth"]
      );
    }
  }

  static async forgotPassword(email: string): Promise<void> {
    const auth = await prisma.auth.findUnique({
      where: { email },
    });

    if (!auth) {
      throw new ErrorResponse("Email user not found", 404, ["email"]);
    }

    const token = jwt.sign(
      { userId: auth.userId, email: auth.email },
      process.env.JWT_SECRET_KEY!,
      { expiresIn: "15m" }
    );

    await prisma.auth.update({
      where: { email },
      data: {
        verified: false,
      },
    });

    const resetUrl = `${
      process.env.SEND_URL || "http://localhost:6666"
    }/reset-password?token=${token}`;

    const htmlContent = `
      <p>Click the button below to reset your password:</p>
      <a href="${resetUrl}" style="display:inline-block;padding:10px 20px;margin:10px 0;background-color:#007bff;color:white;text-decoration:none;border-radius:5px;">Reset Password</a>
      <p>This link will expire in 15 minutes.</p>
    `;

    await sendEmail({
      from: process.env.AUTH_EMAIL,
      to: auth.email,
      subject: "Reset Password",
      html: htmlContent,
    });
  }

  static async resetPassword(request: ResetPasswordRequest): Promise<void> {
    const requests = Validation.validate(
      AuthValidation.RESET_PASSWORD,
      request
    );
    let decoded;
    try {
      decoded = jwt.verify(requests.token, process.env.JWT_SECRET_KEY!);
    } catch (err) {
      throw new ErrorResponse("Invalid or expired token", 400, ["token"]);
    }

    const { userId, email } = decoded as { userId: number; email: string };
    console.log("Decoded token:", { userId, email });

    const auth = await prisma.auth.findUnique({
      where: { userId },
    });

    if (!auth || auth.email !== email) {
      throw new ErrorResponse("Invalid token or user not found", 404, [
        "email",
      ]);
    }

    const hashedPassword = await hashPassword(requests.password);
    console.log("Hashed Password: ", hashedPassword);

    const updatedAuth = await prisma.auth.update({
      where: { userId },
      data: {
        password: hashedPassword,
        verified: true,
      },
    });
    console.log("Updated auth data:", updatedAuth);
  }
}
