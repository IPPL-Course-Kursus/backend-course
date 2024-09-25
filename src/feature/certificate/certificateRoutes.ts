import { Router } from 'express';
import { 
  createCertificateController, 
  getCertificatesController, 
  getCertificateByIdController, 
  updateCertificateController, 
  deleteCertificateController 
} from './certificateController';

const router = Router();

router.post('/', createCertificateController);
router.get('/', getCertificatesController);
router.get('/:id', getCertificateByIdController);
router.put('/:id', updateCertificateController);
router.delete('/:id', deleteCertificateController);

export default router;
