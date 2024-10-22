import { Router } from "express";
import { AuthController } from "./authController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";
import multer from "multer";
import { auth } from "firebase-admin";

const authRoute: Router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

authRoute.post("/login", AuthController.login);
authRoute.post("/register", AuthController.register);
authRoute.post("/register-instruktur", AuthController.registerInstruktur);
authRoute.post("/forgot-password", AuthController.forgotPassword);
authRoute.post(
  "/change-password",
  JWTMiddleware.verifyToken,
  AuthController.changePassword
);

authRoute.post("/reset-password", AuthController.resetPassword);

authRoute.post(
  "/logout-user",
  JWTMiddleware.verifyToken,
  AuthController.logoutUser
);

authRoute.get("/profile", JWTMiddleware.verifyToken, AuthController.getProfile);

authRoute.put(
  "/update-profile",
  JWTMiddleware.verifyToken,
  upload.single("image"),
  AuthController.updateProfile
);

authRoute.get("/test", (req, res) => {
  res.send("Hello World");
});

authRoute.get("/home", JWTMiddleware.verifyToken, (req, res) => {
  res.send("Success");
});

authRoute.get("/count-by-role", AuthController.getCountUserByRole);

authRoute.get(
  "/all-instruktur",
  JWTMiddleware.verifyToken,
  JWTMiddleware.adminOnly,
  AuthController.getAllInstruktur
);

// authRoute.post(
//   "/upload-image",
//   upload.single("image"),
//   AuthController.uploadImage
// );

authRoute.post("/verify-email", AuthController.verifyEmail);

export default authRoute;
