import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AuthService } from "./authService";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      await AuthService.register(data);
      return res.status(201).json({
        success: true,
        message:
          "Registarion User Successful.Verification email sent! User created successfully!",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        });
      }
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
        message:
          "Registarion instruktur Successful. Verification email sent! User created successfully!",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        });
      }
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
        data: token,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        });
      }
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
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        });
      }
      next(error);
    }
  }

  static async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user;
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const response = await AuthService.getProfile(user.uid);
      return res.status(200).json({
        success: true,
        message: "Get profile successful",
        data: {
          ...response,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user;
      const data = req.body;
      const image = req.file;
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const response = await AuthService.updateProfile(user.uid, data, image);
      return res.status(200).json({
        success: true,
        message: "Update profile successful",
        data: response,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        });
      }
      console.error(error);
      next(error);
    }
  }

  static async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user;
      const data = req.body;
      await AuthService.changePassword(user.uid, user.email, data);
      res.status(200).json({ message: "Password changed successfully!" });
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        });
      }
      console.error(error);
      next(error);
    }
  }

  static async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      await AuthService.resetPassword(data);
      return res.status(200).json({
        success: true,
        message: "Password has been reset successfully!",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        });
      }
      console.error(error);
      next(error);
    }
  }

  static async verifyEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      await AuthService.verifyEmail(data);
      return res.status(200).json({
        success: true,
        message: "Email has been verified successfully!",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async getCountUserByRole(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await AuthService.getCountUserByRole();
      return res.status(200).json({
        success: true,
        message: "Get all user by role successful",
        data: response,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async getAllInstruktur(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await AuthService.getAllInstruktur();
      return res.status(200).json({
        success: true,
        message: "Get all instruktur successful",
        data: response,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async deleteInstruktur(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const Id = parseInt(id, 10);
      const response = await AuthService.deleteInstruktur(Id);
      return res.status(200).json({
        success: true,
        message: "Delete instruktur successful",
        data: response,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async getInstrukturById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const userId = parseInt(id, 10);
      const response = await AuthService.getInstrukturById(userId);
      return res.status(200).json({
        success: true,
        message: "Get instruktur by id successful",
        data: response,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async updateInstruktur(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const userId = parseInt(id, 10);
      const data = req.body;
      const image = req.file;
      const response = await AuthService.updateInstruktur(userId, data, image);
      return res.status(200).json({
        success: true,
        message: "Update instruktur successful",
        data: response,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // static async uploadImage(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const image = req.file;
  //     const response = await AuthService.uploadImage(image);
  //     return res.status(200).json({
  //       success: true,
  //       message: response,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     next(error);
  //   }
  // }
}
