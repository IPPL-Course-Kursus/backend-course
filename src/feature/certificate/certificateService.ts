import { createCertificate, getCertificates, getCertificateById, updateCertificate, deleteCertificate } from '../../models/certificate_model';

export const createCertificateService = async (courseUserId: number, certificateNumber: string, issueDate: Date) => {
  return createCertificate(courseUserId, certificateNumber, issueDate);
};

export const getCertificatesService = async () => {
  return getCertificates();
};

export const getCertificateByIdService = async (id: number) => {
  return getCertificateById(id);
};

export const updateCertificateService = async (id: number, certificateNumber: string, issueDate: Date) => {
  return updateCertificate(id, certificateNumber, issueDate);
};

export const deleteCertificateService = async (id: number) => {
  return deleteCertificate(id);
};
