import { Router } from "express";
import { AuthController } from "./authController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";

const authRoute: Router = Router();

authRoute.post("/login", AuthController.login);
authRoute.post("/register", AuthController.register);
authRoute.post("/register-instruktur", AuthController.registerInstruktur);
authRoute.post("/forgot-password", AuthController.forgotPassword);

authRoute.post(
  "/logout-user",
  JWTMiddleware.verifyToken,
  AuthController.logoutUser
);

authRoute.get(
  "/test",
  JWTMiddleware.verifyToken,
  JWTMiddleware.userOnly,
  (req, res) => {
    res.send("Hello World");
  }
);

export default authRoute;
