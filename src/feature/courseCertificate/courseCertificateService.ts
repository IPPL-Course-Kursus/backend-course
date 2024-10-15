import { prisma } from "../../application/database";
import { ErrorResponse } from "../../models/error_response";

export class CourseCertificateService {
  static async createCertificate(courseUserId: number): Promise<void> {
    const courseUser = await prisma.courseUser.findUnique({
      where: { id: courseUserId },
      include: { course: true, user: true },
    });

    if (!courseUser || !courseUser.course) {
      throw new Error("Course not found for the given courseUserId");
    }

    if (courseUser.course.certificateStatus === false) {
      throw new Error("Certificate disabled for this course");
    }

    const courseCode = courseUser.course.courseCode;

    const fullName = courseUser.user.fullName;

    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    const certificateNumber = `${courseCode}${randomNumber}`;

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
    const certificate = await prisma.certificate.findUnique({
      where: { courseUserId },
    });

    if (!certificate) {
      throw new ErrorResponse("Certificate not found", 404);
    }
    return certificate;
  }
}
