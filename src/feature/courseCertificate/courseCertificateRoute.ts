import { Router } from "express";
import { CourseCertificateController } from "./courseCertificateController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";

const courseCertificateRoute: Router = Router();

courseCertificateRoute.post(
  "/create-certificate/:courseUserId",
  JWTMiddleware.verifyToken,
  CourseCertificateController.createCertificate
);

courseCertificateRoute.get(
  "/:courseUserId",
  JWTMiddleware.verifyToken,
  CourseCertificateController.getCertificateByCourseUserId
);

export default courseCertificateRoute;
