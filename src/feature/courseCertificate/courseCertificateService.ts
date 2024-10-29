import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";

export class CourseCertificateService {
  static async createCertificate(courseUserId: number): Promise<void> {
    if (!courseUserId) {
      throw new ErrorResponse("courseUserId is required", 400);
    }
    const courseUser = await prisma.courseUser.findUnique({
      where: { id: courseUserId },
      include: { course: true, user: true },
    });

    if (!courseUser || !courseUser.course) {
      throw new ErrorResponse(
        "Course not found for the given courseUserId",
        404
      );
    }

    if (courseUser.course.certificateStatus === false) {
      throw new ErrorResponse("Certificate disabled for this course", 400);
    }

    const fullName = courseUser.user.fullName;

    let certificateNumber;
    let isUnique = false;
    while (!isUnique) {
      const randomAlphaNumeric =
        CourseCertificateService.generateRandomAlphaNumeric(6);
      certificateNumber = `${randomAlphaNumeric}`;

      const existingCertificate = await prisma.certificate.findFirst({
        where: { certificateNumber },
      });

      if (!existingCertificate) {
        isUnique = true;
      }
    }
    if (!certificateNumber) {
      throw new ErrorResponse("Certificate number not generated", 500);
    }

    await prisma.certificate.create({
      data: {
        courseUserId,
        fullName: fullName,
        certificateNumber,
        issueDate: new Date(),
      },
    });
  }

  static async getCertificateByCourseUserId(
    courseUserId: number
  ): Promise<any> {
    if (!courseUserId) {
      throw new ErrorResponse("courseUserId is required", 400);
    }
    const certificate = await prisma.certificate.findUnique({
      where: { courseUserId },
      include: {
        courseUser: {
          select: {
            course: {
              select: {
                courseName: true,
              },
            },
          },
        },
      },
    });

    if (!certificate) {
      throw new ErrorResponse("Certificate not found", 404);
    }
    return certificate;
  }

  private static generateRandomAlphaNumeric(length: number): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
}
