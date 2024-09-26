import { Router } from "express";
import { AuthController } from "./authController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";

const authRoute: Router = Router();

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
  AuthController.updateProfile
);

authRoute.get("/test", JWTMiddleware.verifyToken, (req, res) => {
  res.send("Hello World");
});

authRoute.post("/verify-email", AuthController.verifyEmail);

export default authRoute;
