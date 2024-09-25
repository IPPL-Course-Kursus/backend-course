import { Request, Response } from 'express';
import { 
  createCertificateService, 
  getCertificatesService, 
  getCertificateByIdService, 
  updateCertificateService, 
  deleteCertificateService 
} from './certificateService';

export const createCertificateController = async (req: Request, res: Response) => {
  try {
    const { courseUserId, certificateNumber, issueDate } = req.body;
    const newCertificate = await createCertificateService(courseUserId, certificateNumber, new Date(issueDate));
    res.status(201).json(newCertificate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create certificate' });
  }
};

export const getCertificatesController = async (req: Request, res: Response) => {
  try {
    const certificates = await getCertificatesService();
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve certificates' });
  }
};

export const getCertificateByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const certificate = await getCertificateByIdService(Number(id));
    if (!certificate) return res.status(404).json({ error: 'Certificate not found' });
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve certificate' });
  }
};

export const updateCertificateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { certificateNumber, issueDate } = req.body;
    const updatedCertificate = await updateCertificateService(Number(id), certificateNumber, new Date(issueDate));
    res.status(200).json(updatedCertificate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update certificate' });
  }
};

export const deleteCertificateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCertificateService(Number(id));
    res.status(200).json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete certificate' });
  }
};
