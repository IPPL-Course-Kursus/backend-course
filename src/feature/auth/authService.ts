import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../../utils/format";
import { LoginRequest, LoginResponse, RegisterRequest } from "./authModel";
import { AuthValidation } from "./authValidation";
import { Validation } from "../../validations/validation";
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
}
