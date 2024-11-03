import { Request, Response, NextFunction } from "express";
import { CourseCertificateService } from "./courseCertificateService";

export class CourseCertificateController {
  static async createCertificate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { courseUserId } = req.params;
      const certificate = await CourseCertificateService.createCertificate(
        courseUserId
      );
      res
        .status(201)
        .json({ message: "Certificate created successfully", certificate });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

  static async getCertificateByCourseUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { courseUserId } = req.params;
      const certificate =
        await CourseCertificateService.getCertificateByCourseUserId(
          courseUserId
        );
      res.status(200).json(certificate);
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }
}
