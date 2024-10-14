import { Router } from "express";
import { TransactionController } from "./transactionController";
import { JWTMiddleware } from "../../middleware/jwt_middleware";

const transactionRoute: Router = Router();

transactionRoute.post(
  "/create-transaction/:courseId",
  JWTMiddleware.verifyToken,
  TransactionController.createTransaction
);

transactionRoute.post(
  "/success-payment",
  TransactionController.handleSuccessPayment
);

transactionRoute.get(
  "/user",
  JWTMiddleware.verifyToken,
  TransactionController.getTransactionByUserId
);

transactionRoute.get("/", TransactionController.getAllTransactions);

// transactionRoute.post(
//   "/notifications",
//   TransactionController.handleNotification
// );

export default transactionRoute;
