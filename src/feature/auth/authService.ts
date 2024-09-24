import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  UserProfile,
  ChangePasswordRequest,
  ResetPasswordRequest,
} from "./authModel";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  confirmPasswordReset,
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

  static async getProfile(uid: string): Promise<any> {
    const user = await prisma.user.findUnique({ where: { uid } });
    if (!user) {
      throw new ErrorResponse(
        "User not found",
        404,
        ["user_id"],
        "USER_NOT_FOUND"
      );
    }

    const response = {
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      city: user.city,
      country: user.country,
      tanggalLahir: user.tanggalLahir,
    };

    return response;
  }

  static async updateProfile(uid: string, data: UserProfile): Promise<any> {
    const validData = Validation.validate(AuthValidation.UPDATE_PROFILE, data);
    const users = await prisma.user.findUnique({ where: { uid } });
    if (!users) {
      throw new ErrorResponse(
        "User not found",
        404,
        ["user_id"],
        "USER_NOT_FOUND"
      );
    }
    const updatedUser = await prisma.user.update({
      where: { uid },
      data: {
        fullName: validData.fullName,
        phoneNumber: validData.phoneNumber,
        city: validData.city,
        country: validData.country,
        tanggalLahir: validData.tanggalLahir
          ? new Date(validData.tanggalLahir)
          : undefined,
      },
    });

    const response = {
      fullName: updatedUser.fullName,
      phoneNumber: updatedUser.phoneNumber,
      city: updatedUser.city,
      country: updatedUser.country,
      tanggalLahir: updatedUser.tanggalLahir,
    };

    return response;
  }

  static async changePassword(
    uid: string,
    email: string,
    request: ChangePasswordRequest
  ): Promise<void> {
    const requests = Validation.validate(
      AuthValidation.CHANGE_PASSWORD,
      request
    );
    const user = await prisma.user.findUnique({ where: { uid } });
    if (!user) {
      throw new ErrorResponse(
        "User not found",
        404,
        ["user_id"],
        "USER_NOT_FOUND"
      );
    }
    const credential = EmailAuthProvider.credential(
      email,
      requests.currentPassword
    );
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new ErrorResponse("User not authenticated", 401, [
        "authentication",
      ]);
    }
    await reauthenticateWithCredential(currentUser, credential);
    await updatePassword(currentUser, requests.newPassword);
  }

  static async resetPassword(data: ResetPasswordRequest): Promise<any> {
    const requests = Validation.validate(AuthValidation.RESET_PASSWORD, data);
    if (!requests.oobCode || !requests.newPassword) {
      throw new ErrorResponse("Invalid obbCode or newPassword", 400, [
        "obbCode",
        "newPassword",
      ]);
    }
    if (requests.newPassword !== requests.confirmPassword) {
      throw new ErrorResponse("Password does not match", 400, [
        "confirmPassword",
      ]);
    }
    await confirmPasswordReset(auth, requests.oobCode, requests.newPassword);
  }
}
