import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";
import {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  UserProfile,
  ChangePasswordRequest,
  ResetPasswordRequest,
  VerifyEmailRequest,
} from "./authModel";
import {
  auth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  confirmPasswordReset,
  applyActionCode,
} from "../../config/firebase";
import { AuthValidation } from "./authValidation";
import { Validation } from "../../validations/validation";
import { imagekit } from "../../utils/image_kit";
import { checkProhibitedWords } from "../../utils/checkProhibiteWords";

export class AuthService {
  static async register(user: RegisterRequest): Promise<void> {
    if (
      !user.fullName ||
      !user.phoneNumber ||
      !user.tanggalLahir ||
      !user.city ||
      !user.email ||
      !user.password
    ) {
      throw new ErrorResponse("Register Data is Empty", 400, [
        "fullName",
        "phoneNumber",
        "tanggalLahir",
        "city",
        "country",
        "email",
        "password",
      ]);
    }

    if (
      checkProhibitedWords(user.fullName) ||
      checkProhibitedWords(user.email) ||
      checkProhibitedWords(user.city) ||
      checkProhibitedWords(user.password)
    ) {
      throw new ErrorResponse("fullName contains prohibited words", 400, [
        "fullName",
      ]);
    }

    const requests = Validation.validate(AuthValidation.REGISTER, user);
    const { email, password, fullName, phoneNumber, tanggalLahir, city } =
      requests;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredential.user.uid;

    const findUser = await prisma.user.findFirst({ where: { fullName } });

    if (findUser) {
      throw new ErrorResponse("User already exists", 400, ["fullName"]);
    }

    await prisma.user.create({
      data: {
        uid,
        fullName,
        phoneNumber,
        role: "User",
        tanggalLahir: new Date(tanggalLahir),
        city,
      },
    });
    await sendEmailVerification(userCredential.user);
  }

  static async verifyEmail(data: VerifyEmailRequest): Promise<any> {
    if (!data.oobCode) {
      throw new ErrorResponse("Invalid oobCode", 400, ["oobCode"]);
    }
    await applyActionCode(auth, data.oobCode);
  }

  static async registerInstruktur(user: RegisterRequest): Promise<void> {
    if (
      !user.fullName ||
      !user.phoneNumber ||
      !user.tanggalLahir ||
      !user.city ||
      !user.email ||
      !user.password
    ) {
      throw new ErrorResponse("Register Data is Empty", 400, [
        "fullName",
        "phoneNumber",
        "tanggalLahir",
        "city",
        "country",
        "email",
        "password",
      ]);
    }
    const requests = Validation.validate(AuthValidation.REGISTER, user);
    const { email, password, fullName, phoneNumber, tanggalLahir, city } =
      requests;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredential.user.uid;

    const findUser = await prisma.user.findFirst({ where: { fullName } });

    if (findUser) {
      throw new ErrorResponse("User already exists", 400, ["fullName"]);
    }

    await prisma.user.create({
      data: {
        uid,
        fullName,
        phoneNumber,
        role: "Instruktur",
        tanggalLahir: new Date(tanggalLahir),
        city,
      },
    });
    await sendEmailVerification(userCredential.user);
  }

  static async login(data: LoginRequest): Promise<any> {
    if (!data.email || !data.password) {
      return Promise.reject(
        new ErrorResponse("Email or password is empty", 400, [
          "email",
          "password",
        ])
      );
    }
    const requests = Validation.validate(AuthValidation.LOGIN, data);
    const { email, password } = requests;
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          return sendEmailVerification(user).then(() => {
            return Promise.reject(
              new ErrorResponse(
                "Email not verified. Please check your email to verify your account before logging in.",
                403,
                ["user_id"]
              )
            );
          });
        }
        return prisma.user
          .findFirst({ where: { uid: user.uid } })
          .then((userData) => {
            if (!userData || userData.isDeleted) {
              return Promise.reject(
                new ErrorResponse(
                  "Your account has been deleted. Please contact the administrator.",
                  403,
                  ["user_id"]
                )
              );
            }
            return user.getIdToken().then((token) => {
              return {
                token,
                role: userData.role,
              };
            });
          });
      })
      .catch((error) => {
        console.log(error);
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/wrong-password" ||
          error.code === "auth/invalid-credential"
        ) {
          return Promise.reject(
            new ErrorResponse("Invalid email or password", 400, [
              "email or password",
            ])
          );
        }
        if (error instanceof ErrorResponse) {
          return Promise.reject(error);
        }
        return Promise.reject(
          new ErrorResponse("An unexpected error occurred", 500)
        );
      });
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
    if (!user.email) {
      throw new ErrorResponse("email is empty", 400, ["email"]);
    }
    const requests = Validation.validate(AuthValidation.FORGOT_PASSWORD, user);
    const { email } = requests;

    const userForgotPassword = await sendPasswordResetEmail(auth, email);
    return userForgotPassword;
  }

  static async getProfile(uid: string): Promise<any> {
    if (!uid) {
      throw new ErrorResponse("uid is empty", 400, ["uid"]);
    }
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
      tanggalLahir: user.tanggalLahir,
      image: user.image,
    };

    return response;
  }

  static async updateProfile(
    uid: string,
    data: UserProfile,
    file: any
  ): Promise<any> {
    if (!uid || !data) {
      throw new ErrorResponse("uid or data is empty", 400, ["uid", "data"]);
    }
    const user = await prisma.user.findUnique({ where: { uid } });

    if (!user) {
      throw new ErrorResponse(
        "User not found",
        404,
        ["user_id"],
        "USER_NOT_FOUND"
      );
    }

    let imageUrl = user.image;

    const validFileTypes = ["image/jpeg", "image/png"];

    if (file && validFileTypes.includes(file.mimetype)) {
      try {
        const result = await imagekit.upload({
          file: file.buffer,
          fileName: `${uid}-${Date.now()}-${file.originalname}`,
          folder: "/photoProfile",
        });

        imageUrl = result.url;
      } catch (error) {
        console.error("Failed to upload image:", error);
        throw new ErrorResponse("Failed to upload image", 500, ["upload"]);
      }
    }

    const updatedUser = await prisma.user.update({
      where: { uid },
      data: {
        ...data,
        image: imageUrl,
        tanggalLahir: data.tanggalLahir
          ? new Date(data.tanggalLahir)
          : user.tanggalLahir,
      },
    });

    return {
      data: updatedUser,
    };
  }

  static async changePassword(
    uid: string,
    email: string,
    request: ChangePasswordRequest
  ): Promise<void> {
    if (!uid || !email || !request) {
      throw new ErrorResponse("uid or email or request is empty", 400, [
        "uid",
        "email",
        "request",
      ]);
    }
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
    if (!data.oobCode || !data.newPassword || !data.confirmPassword) {
      throw new ErrorResponse(
        "obbCode or newPassword or confirmPassword is empty",
        400,
        ["obbCode", "newPassword", "confirmPassword"]
      );
    }
    const requests = Validation.validate(AuthValidation.RESET_PASSWORD, data);
    if (requests.newPassword !== requests.confirmPassword) {
      throw new ErrorResponse("Password does not match", 400, [
        "confirmPassword",
      ]);
    }
    await confirmPasswordReset(auth, requests.oobCode, requests.newPassword);
  }

  static async getCountUserByRole(): Promise<any> {
    const userCount = await prisma.user.count({
      where: {
        role: "User",
      },
    });
    const instrukturCount = await prisma.user.count({
      where: {
        role: "Instruktur",
      },
    });
    if (!userCount || !instrukturCount) {
      throw new ErrorResponse("User not found", 404, ["user_id"]);
    }
    return {
      userCount,
      instrukturCount,
    };
  }

  static async getAllInstruktur(): Promise<any> {
    const instruktur = await prisma.user.findMany({
      where: {
        role: "Instruktur",
        isDeleted: null,
      },
    });
    if (!instruktur) {
      throw new ErrorResponse("Instruktur not found", 404, ["user_id"]);
    }
    return instruktur;
  }

  static async deleteInstruktur(id: number): Promise<any> {
    if (!id) {
      throw new ErrorResponse("uid is empty", 400, ["uid"]);
    }

    const deleteInstruktur = await prisma.user.update({
      where: {
        id,
      },
      data: {
        isDeleted: new Date(),
      },
    });

    if (!deleteInstruktur) {
      throw new ErrorResponse("Instruktur not found", 404, ["user_id"]);
    }
  }

  static async getInstrukturById(id: number): Promise<any> {
    if (!id) {
      throw new ErrorResponse("uid is empty", 400, ["uid"]);
    }

    const instruktur = await prisma.user.findUnique({
      where: {
        id,
        role: "Instruktur",
      },
    });
    if (!instruktur) {
      throw new ErrorResponse("Instruktur not found", 404, ["user_id"]);
    }

    return instruktur;
  }

  static async updateInstruktur(
    id: number,
    data: UserProfile,
    file: any
  ): Promise<any> {
    if (!id) {
      throw new ErrorResponse("id is empty", 400, ["id"]);
    }

    const user = await prisma.user.findUnique({
      where: {
        id,
        role: "Instruktur",
      },
    });

    if (!user) {
      throw new ErrorResponse("Instruktur not found", 404, ["user_id"]);
    }

    let imageUrl = user.image;

    const validFileTypes = ["image/jpeg", "image/png"];

    if (file && validFileTypes.includes(file.mimetype)) {
      try {
        const result = await imagekit.upload({
          file: file.buffer,
          fileName: `${user.uid}-${Date.now()}-${file.originalname}`,
          folder: "/photoProfile",
        });

        imageUrl = result.url;
      } catch (error) {
        console.error("Failed to upload image:", error);
        throw new ErrorResponse("Failed to upload image", 500, ["upload"]);
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...data,
        image: imageUrl,
        tanggalLahir: data.tanggalLahir
          ? new Date(data.tanggalLahir)
          : user.tanggalLahir,
      },
    });

    return {
      data: updatedUser,
    };
  }

  // static async uploadImage(image: any): Promise<any> {
  //   if (!image) {
  //     throw new ErrorResponse("Image is empty", 400, ["image"]);
  //   }

  //   try {
  //     let imageUrl;
  //     const storageRef = ref(storage, `${image.originalname}`); // Unique filename
  //     const metadata = { contentType: image.mimetype };
  //     const uploadTask = uploadBytesResumable(
  //       storageRef,
  //       image.buffer,
  //       metadata
  //     ); // Use image.buffer

  //     return new Promise((resolve, reject) => {
  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const progress =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log("Upload is " + progress + "% done");
  //         },
  //         (error) => {
  //           console.error("Error uploading file:", error);
  //           reject(new ErrorResponse("Failed to upload file", 500, ["upload"]));
  //         },
  //         async () => {
  //           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  //           imageUrl = downloadURL;
  //           resolve(imageUrl); // Resolve the URL after upload is done
  //         }
  //       );
  //     });
  //   } catch (error) {
  //     throw new ErrorResponse("Failed to upload image", 500, ["upload"]);
  //   }
  // }
}
