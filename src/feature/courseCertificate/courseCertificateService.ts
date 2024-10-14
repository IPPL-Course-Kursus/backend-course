import { prisma } from '../../application/database'; // Sesuaikan path jika perlu
import { ErrorResponse } from '../../models/error_response'; // Sesuaikan path jika perlu
import { CreateCertificateRequest, UpdateCertificateRequest } from './courseCertificateModel'; // Sesuaikan path jika perlu
import { CertificateValidation } from './courseCertificateValidation'; // Jika ada validasi untuk sertifikat
import { Validation } from '../../validations/validation'; // Sesuaikan path jika perlu

export class CertificateService {
  
  // Create a new certificate
  static async createCertificate(request: CreateCertificateRequest): Promise<void> {
    const validatedRequest = Validation.validate(CertificateValidation.CREATE, request);
    const { courseUserId, certificateNumber, issueDate } = validatedRequest;

    try {
      await prisma.certificate.create({
        data: {
          courseUserId,
          certificateNumber,
          issueDate,
        },
      });
    } catch (error) {
      console.error("Error during certificate creation:", error);
      throw new ErrorResponse(
        "Certificate creation failed: unable to save to database",
        500,
        ["database"]
      );
    }
  }

  // Get all certificates
  static async getCertificates(): Promise<any> {
    try {
      const certificates = await prisma.certificate.findMany();
      return certificates;
    } catch (error) {
      console.error("Error during fetching certificates:", error);
      throw new ErrorResponse(
        "Failed to retrieve certificates from database",
        500,
        ["database"]
      );
    }
  }

  // Get a certificate by ID
  static async getCertificateById(id: number): Promise<any> {
    try {
      const certificate = await prisma.certificate.findUnique({
        where: { id },
      });
      if (!certificate) {
        throw new ErrorResponse("Certificate not found", 404, ["id"]);
      }
      return certificate;
    } catch (error) {
      console.error("Error during fetching certificate by ID:", error);
      throw new ErrorResponse(
        "Failed to retrieve certificate from database",
        500,
        ["database", "id"]
      );
    }
  }

  // Update an existing certificate
  static async updateCertificate(data: { id: number; certificateNumber: string; issueDate: Date }): Promise<any> {
    const { id, certificateNumber, issueDate } = data;

    try {
      const updatedCertificate = await prisma.certificate.update({
        where: {
          id: id, // ID harus dikirim dengan benar di where clause
        },
        data: {
          certificateNumber, // Update certificateNumber
          issueDate, // Update issueDate
        },
      });

      return updatedCertificate;
    } catch (error) {
      console.error("Error updating certificate:", error);
      throw new ErrorResponse(
        "Error updating certificate: unable to update",
        500,
        ["database"]
      );
    }
  }

  // Delete a certificate
  static async deleteCertificate(id: number): Promise<void> {
    try {
      await prisma.certificate.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Error during certificate deletion:", error);
      throw new ErrorResponse(
        "Certificate deletion failed: unable to delete from database",
        500,
        ["database", "id"]
      );
    }
  }
}
