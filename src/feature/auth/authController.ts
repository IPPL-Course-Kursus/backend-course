import { Request, Response, NextFunction } from "express";
import { AuthService } from "./authService";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      await AuthService.register(data);
      return res.status(201).json({
        success: true,
        message: "Verification email sent! User created successfully!",
      });
    } catch (error) {
      next(error);
    }
  }

  static async registerInstruktur(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      await AuthService.registerInstruktur(data);
      return res.status(201).json({
        success: true,
        message: "Verification email sent! User created successfully!",
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login({ email, password });

      return res.status(200).json({
        success: true,
        message: "Login in successfully",
        data: {
          token: token,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  static async logoutUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user;
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const response = await AuthService.logoutUser();
      res.locals.user = null;

      res.status(200).json({ message: response });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      await AuthService.forgotPassword({ email });
      return res.status(200).json({
        success: true,
        message: "Reset password email sent!",
      });
    } catch (error) {
      next(error);
    }
  }
}