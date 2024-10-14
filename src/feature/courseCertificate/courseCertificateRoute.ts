import { Router } from 'express';
import { CertificateController } from './courseCertificateController'; // Sesuaikan path jika perlu

const certificateRoute: Router = Router();

// Create a new certificate
certificateRoute.post(
  '/',
  CertificateController.createCertificate
);

// Get all certificates
certificateRoute.get(
  '/',
  CertificateController.getCertificates
);

// Get a specific certificate by ID
certificateRoute.get(
  '/:id',
  CertificateController.getCertificateById
);

// Update a certificate by ID
certificateRoute.put(
  '/:id',
  CertificateController.updateCertificate
);

// Delete a certificate by ID
certificateRoute.delete(
  '/:id',
  CertificateController.deleteCertificate
);

export default certificateRoute;
