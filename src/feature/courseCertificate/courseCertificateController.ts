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
    } catch (error) {
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
    } catch (error) {
      next(error);
    }
  }
}
