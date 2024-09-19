import { prisma } from "../../application/database";
import { Prisma } from "@prisma/client";
import { ErrorResponse } from "../../models/error_response";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword, createJwt } from "../../utils/format";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "./authModel";
const dotenv = require("dotenv");
dotenv.config();

export class AuthService {
  static async login({
    email,
    password,
  }: LoginRequest): Promise<LoginResponse> {
    const auth = await prisma.auth.findUnique({
      where: {
        email: email,
      },
    });

    if (!auth) {
      throw new ErrorResponse("Invalid email or password", 400, [
        "email",
        "password",
      ]);
    }

    if (!auth.verified) {
      throw new ErrorResponse("Account not verified", 403, [
        "email",
        "password",
      ]);
    }

    const isPasswordValid = await comparePassword(password, auth.password);

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

  static async register({
    username,
    country,
    city,
    phoneNumber,
    tanggalLahir,
    email,
    password,
  }: RegisterRequest): Promise<RegisterResponse> {
    const existingAuth = await prisma.auth.findUnique({
      where: {
        email: email,
      },
    });

    if (existingAuth) {
      throw new ErrorResponse("Email already in use", 400, ["email"]);
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        username,
        phoneNumber,
        role: "User",
        tanggalLahir: new Date(tanggalLahir),
        city,
        country,
      },
    });

    const newAuth = await prisma.auth.create({
      data: {
        userId: newUser.id,
        email,
        password: hashedPassword,
        verified: true,
      },
    });

    const data = {
      email: newAuth.email,
      username: newUser.username,
      country: newUser.country,
      city: newUser.city,
      phoneNumber: newUser.phoneNumber,
      tanggalLahir: newUser.tanggalLahir,
    };

    return data;
  }

  static async registerInstruktur({
    username,
    country,
    city,
    phoneNumber,
    tanggalLahir,
    email,
    password,
  }: RegisterRequest): Promise<RegisterResponse> {
    const existingAuth = await prisma.auth.findUnique({
      where: {
        email: email,
      },
    });

    if (existingAuth) {
      throw new ErrorResponse("Email already in use", 400, ["email"]);
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        username,
        phoneNumber,
        role: "Instruktur",
        tanggalLahir: new Date(tanggalLahir),
        city,
        country,
      },
    });

    const newAuth = await prisma.auth.create({
      data: {
        userId: newUser.id,
        email,
        password: hashedPassword,
        verified: true,
      },
    });

    const data = {
      email: newAuth.email,
      username: newUser.username,
      country: newUser.country,
      city: newUser.city,
      phoneNumber: newUser.phoneNumber,
      tanggalLahir: newUser.tanggalLahir,
    };

    return data;
  }
}
