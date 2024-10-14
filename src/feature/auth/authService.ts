import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
} from "./authModel";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "../../config/firebase";
import { AuthValidation } from "./authValidation";
import { Validation } from "../../validations/validation";
const dotenv = require("dotenv");
dotenv.config();

const auth = getAuth();

export class AuthService {
  static async register(user: RegisterRequest): Promise<void> {
    const requests = Validation.validate(AuthValidation.REGISTER, user);
    const {
      email,
      password,
      fullName,
      phoneNumber,
      tanggalLahir,
      city,
      country,
    } = requests;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;

      await prisma.user.create({
        data: {
          uid,
          fullName,
          phoneNumber,
          role: "User",
          tanggalLahir: new Date(tanggalLahir),
          city,
          country,
        },
      });
      await sendEmailVerification(userCredential.user);
    } catch (error) {
      console.error("Error during registration:", error);
      throw new ErrorResponse(
        "Registration failed: unable to create user in Firebase or database",
        500,
        ["registration", "firebase", "database"]
      );
    }
  }

  static async registerInstruktur(user: RegisterRequest): Promise<void> {
    const requests = Validation.validate(AuthValidation.REGISTER, user);
    const {
      email,
      password,
      fullName,
      phoneNumber,
      tanggalLahir,
      city,
      country,
    } = requests;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;

      await prisma.user.create({
        data: {
          uid,
          fullName,
          phoneNumber,
          role: "Instruktur",
          tanggalLahir: new Date(tanggalLahir),
          city,
          country,
        },
      });
      await sendEmailVerification(userCredential.user);
    } catch (error) {
      console.error("Error during registration:", error);
      throw new ErrorResponse(
        "Registration failed: unable to create user in Firebase or database",
        500,
        ["registration", "firebase", "database"]
      );
    }
  }

  static async login(user: LoginRequest): Promise<string> {
    const requests = Validation.validate(AuthValidation.LOGIN, user);
    const { email, password } = requests;
    if (!email || !password) {
      throw new ErrorResponse("Invalid email or password", 400, [
        "email",
        "password",
      ]);
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user.getIdToken();
  }

  static async logoutUser(): Promise<string> {
    try {
      signOut(auth);
      return "User logged out successfully";
    } catch (error) {
      throw new ErrorResponse(
        "Internal Server Error",
        500,
        ["logout"],
        "LOGOUT_ERROR"
      );
    }
  }

  static async forgotPassword(user: ForgotPasswordRequest): Promise<void> {
    const requests = Validation.validate(AuthValidation.FORGOT_PASSWORD, user);
    const { email } = requests;
    if (!email) {
      throw new ErrorResponse("Invalid email", 400, ["email"]);
    }

    const userForgotPassword = await sendPasswordResetEmail(auth, email);
    return userForgotPassword;
  }
}