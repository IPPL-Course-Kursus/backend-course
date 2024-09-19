import { Request, Response, NextFunction } from "express";
import { AuthService } from "./authService";

export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login({ email, password });
      return res.status(200).json({
        success: true,
        message: "Login in successfully",
        data: { ...token },
      });
    } catch (error) {
      next(error);
    }
  }
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const user = await AuthService.register(data);
      return res.status(201).json({
        success: true,
        data: { user },
        message: "User registered successfully",
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
      const user = await AuthService.registerInstruktur(data);
      return res.status(201).json({
        success: true,
        data: { user },
        message: "User registered successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
