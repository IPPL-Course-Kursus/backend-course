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
  FirebaseError,
  adminAuth,
  fs,
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "../../config/firebase";
import { AuthValidation } from "./authValidation";
import { Validation } from "../../validations/validation";
import { imagekit } from "../../utils/image_kit";
import { checkProhibitedWords } from "../../utils/checkProhibiteWords";
import { hashPassword, verifyPassword } from "../../utils/format";

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
        "email",
        "password",
      ]);
    }

    if (checkProhibitedWords(user.fullName)) {
      throw new ErrorResponse("fullName contains prohibited words", 400, [
        "fullName",
      ]);
    }
    if (checkProhibitedWords(user.email)) {
      throw new ErrorResponse("email contains prohibited words", 400, [
        "email",
      ]);
    }
    if (checkProhibitedWords(user.city)) {
      throw new ErrorResponse("city contains prohibited words", 400, ["city"]);
    }
    if (checkProhibitedWords(user.password)) {
      throw new ErrorResponse("password contains prohibited words", 400, [
        "password",
      ]);
    }

    const requests = Validation.validate(AuthValidation.REGISTER, user);
    const { email, password, fullName, phoneNumber, tanggalLahir, city } =
      requests;

    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const uid = userCredential.user.uid;
        const hashedPassword = hashPassword(password);

        await prisma.user.create({
          data: {
            uid,
            fullName,
            phoneNumber,
            role: "User",
            tanggalLahir: new Date(tanggalLahir),
            city,
            image:
              "https://ik.imagekit.io/vyck38py3/photoProfile/user_profile.jpg?updatedAt=1730528814856",
          },
        });

        await setDoc(doc(fs, "users", uid), {
          email,
          hashedPassword,
        });

        await sendEmailVerification(userCredential.user);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          throw new ErrorResponse("Email already in use", 400, ["email"]);
        }
        throw new ErrorResponse("Error registering user", 500);
      });
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
        "email",
        "password",
      ]);
    }
    if (checkProhibitedWords(user.fullName)) {
      throw new ErrorResponse("fullName contains prohibited words", 400, [
        "fullName",
      ]);
    }
    if (checkProhibitedWords(user.email)) {
      throw new ErrorResponse("email contains prohibited words", 400, [
        "email",
      ]);
    }
    if (checkProhibitedWords(user.city)) {
      throw new ErrorResponse("city contains prohibited words", 400, ["city"]);
    }
    if (checkProhibitedWords(user.password)) {
      throw new ErrorResponse("password contains prohibited words", 400, [
        "password",
      ]);
    }
    const requests = Validation.validate(AuthValidation.REGISTER, user);
    const { email, password, fullName, phoneNumber, tanggalLahir, city } =
      requests;

    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const uid = userCredential.user.uid;

        await prisma.user.create({
          data: {
            uid,
            fullName,
            phoneNumber,
            role: "Instruktur",
            tanggalLahir: new Date(tanggalLahir),
            city,
            image:
              "https://ik.imagekit.io/vyck38py3/photoProfile/user_profile.jpg?updatedAt=1730528814856",
          },
        });

        await sendEmailVerification(userCredential.user);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          throw new ErrorResponse("Email already in use", 400, ["email"]);
        }
        throw new ErrorResponse("Error registering user", 500);
      });
  }

  private static async handleUserNotFound(data: LoginRequest): Promise<any> {
    const userQuery = query(
      collection(fs, "users"),
      where("email", "==", data.email)
    );
    const userSnapshot = await getDocs(userQuery);

    if (userSnapshot.empty) {
      throw new ErrorResponse("Email not found", 400, ["email"]);
    }

    const userDoc = userSnapshot.docs[0].data();

    const storedPassword = userDoc.hashedPassword;
    if (!storedPassword) {
      throw new ErrorResponse("Invalid email or password", 400, [
        "email or password",
      ]);
    }

    if (!verifyPassword(data.password, storedPassword)) {
      throw new ErrorResponse("Invalid email or password", 400, [
        "email or password",
      ]);
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const uid = userCredential.user.uid;
    await adminAuth.updateUser(uid, { emailVerified: true });

    await prisma.user.create({
      data: {
        uid,
        fullName: "Full Name",
        phoneNumber: "082111111111",
        role: "User",
        tanggalLahir: new Date(),
        city: "City",
        image:
          "https://ik.imagekit.io/vyck38py3/photoProfile/user_profile.jpg?updatedAt=1730528814856",
      },
    });
    const token = await userCredential.user.getIdToken();

    return {
      token,
      role: "User",
    };
  }

  static async login(data: LoginRequest): Promise<any> {
    if (!data.email || !data.password) {
      throw new ErrorResponse("Email or password is empty", 400, [
        "email",
        "password",
      ]);
    }

    if (checkProhibitedWords(data.email)) {
      throw new ErrorResponse("Email contains prohibited words", 400, [
        "email",
      ]);
    }
    if (checkProhibitedWords(data.password)) {
      throw new ErrorResponse("Password contains prohibited words", 400, [
        "password",
      ]);
    }

    try {
      const { email, password } = Validation.validate(
        AuthValidation.LOGIN,
        data
      );

      const userRecord = await adminAuth.getUserByEmail(email);

      const uidUser = await prisma.user.findUnique({
        where: { uid: userRecord.uid },
      });

      if (!uidUser) {
        return this.handleUserNotFound(data);
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        await sendEmailVerification(user);
        throw new ErrorResponse(
          "Email not verified. Please check your email to verify your account before logging in.",
          403,
          ["user_id"]
        );
      }

      const userData = await prisma.user.findFirst({
        where: { uid: user.uid },
      });

      if (!userData || userData.isDeleted) {
        throw new ErrorResponse(
          "Your account has been deleted. Please contact the administrator.",
          403,
          ["user_id"]
        );
      }

      const token = await user.getIdToken();

      return {
        token,
        role: userData.role,
      };
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        return this.handleUserNotFound(data);
      }

      if (
        error.code === "auth/invalid-email" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        throw new ErrorResponse("Invalid email or password", 400, [
          "email or password",
        ]);
      }

      if (error instanceof ErrorResponse) {
        throw error;
      }

      throw new ErrorResponse("An unexpected error occurred", 500);
    }
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

    return adminAuth
      .getUserByEmail(email)
      .then((userRecord) => {
        if (!userRecord) {
          return Promise.reject(
            new ErrorResponse("User not found", 404, ["user_id"])
          );
        }
        return sendPasswordResetEmail(auth, email);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          return Promise.reject(
            new ErrorResponse("User not found", 404, ["user_id"])
          );
        }

        return Promise.reject(
          new ErrorResponse("An unexpected error occurred", 500)
        );
      });
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
    file?: any
  ): Promise<any> {
    if (
      !uid ||
      !data.city ||
      !data.fullName ||
      !data.tanggalLahir ||
      !data.phoneNumber
    ) {
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

    if (checkProhibitedWords(user.fullName)) {
      throw new ErrorResponse("fullName contains prohibited words", 400, [
        "fullName",
      ]);
    }
    if (checkProhibitedWords(user.city)) {
      throw new ErrorResponse("city contains prohibited words", 400, ["city"]);
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

    if (checkProhibitedWords(request.currentPassword)) {
      throw new ErrorResponse(
        "currentPassword contains prohibited words",
        400,
        ["currentPassword"]
      );
    }
    if (checkProhibitedWords(request.newPassword)) {
      throw new ErrorResponse("newPassword contains prohibited words", 400, [
        "newPassword",
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

    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new ErrorResponse("User not authenticated", 401, [
        "authentication",
      ]);
    }

    try {
      const credential = EmailAuthProvider.credential(
        email,
        requests.currentPassword
      );
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, requests.newPassword);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/wrong-password":
          case "auth/invalid-credential":
            throw new ErrorResponse("Incorrect current password", 400, [
              "currentPassword",
            ]);
          case "auth/user-mismatch":
            throw new ErrorResponse(
              "User does not match the authenticated user",
              400,
              ["authentication"]
            );
          default:
            throw new ErrorResponse(
              "An unexpected error occurred while changing the password",
              500,
              ["changePassword"]
            );
        }
      }
      throw new ErrorResponse("An unexpected error occurred", 500, [
        "changePassword",
      ]);
    }
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
    if (checkProhibitedWords(requests.newPassword)) {
      throw new ErrorResponse("newPassword contains prohibited words", 400, [
        "newPassword",
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
        isDeleted: null,
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

    const instruktur = await prisma.user.findUnique({
      where: {
        id,
        role: "Instruktur",
      },
    });
    if (!instruktur) {
      throw new ErrorResponse("Instruktur not found", 404, ["user_id"]);
    }

    const relatedCourse = await prisma.course.findMany({
      where: {
        userId: instruktur.uid,
      },
    });

    if (relatedCourse.length > 0) {
      const courseNames = relatedCourse
        .slice(0, 5)
        .map((course) => course.courseName)
        .join(", ");
      throw new ErrorResponse(
        `Cannot delete user: it is referenced by existing courses: ${courseNames}.`,
        400
      );
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

    if (checkProhibitedWords(user.fullName)) {
      throw new ErrorResponse("fullName contains prohibited words", 400, [
        "fullName",
      ]);
    }
    if (checkProhibitedWords(user.city)) {
      throw new ErrorResponse("city contains prohibited words", 400, ["city"]);
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
