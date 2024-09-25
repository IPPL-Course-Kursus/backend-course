import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createCertificate = async (courseUserId: number, certificateNumber: string, issueDate: Date) => {
  return prisma.certificate.create({
    data: {
      courseUserId,
      certificateNumber,
      issueDate,
    },
  });
};

export const getCertificates = async () => {
  return prisma.certificate.findMany();
};

export const getCertificateById = async (id: number) => {
  return prisma.certificate.findUnique({
    where: { id },
  });
};

export const updateCertificate = async (id: number, certificateNumber: string, issueDate: Date) => {
  return prisma.certificate.update({
    where: { id },
    data: {
      certificateNumber,
      issueDate,
    },
  });
};

export const deleteCertificate = async (id: number) => {
  return prisma.certificate.delete({
    where: { id },
  });
};
