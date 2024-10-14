import { Request, Response, NextFunction } from 'express';
import { CertificateService } from './certificateService'; // Sesuaikan path jika perlu

export class CertificateController {
  
  // Create a new certificate
  static async createCertificate(req: Request, res: Response, next: NextFunction) {
    try {
      const { courseUserId, certificateNumber, issueDate } = req.body;
      const newCertificate = await CertificateService.createCertificate(courseUserId, certificateNumber, new Date(issueDate));
      return res.status(201).json({
        success: true,
        message: 'Certificate created successfully!',
        data: newCertificate,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all certificates
  static async getAllCertificates(req: Request, res: Response, next: NextFunction) {
    try {
      const certificates = await CertificateService.getCertificates();
      return res.status(200).json({
        success: true,
        data: certificates,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get a certificate by ID
  static async getCertificateById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const certificate = await CertificateService.getCertificateById(Number(id));

      if (!certificate) {
        return res.status(404).json({
          success: false,
          message: 'Certificate not found',
        });
      }

      return res.status(200).json({
        success: true,
        data: certificate,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update an existing certificate
  static async updateCertificate(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { certificateNumber, issueDate } = req.body;
      const updatedCertificate = await CertificateService.updateCertificate(Number(id), certificateNumber, new Date(issueDate));
      
      return res.status(200).json({
        success: true,
        message: 'Certificate updated successfully!',
        data: updatedCertificate,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete a certificate by ID
  static async deleteCertificate(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await CertificateService.deleteCertificate(Number(id));
      return res.status(200).json({
        success: true,
        message: 'Certificate deleted successfully!',
      });
    } catch (error) {
      next(error);
    }
  }
}
