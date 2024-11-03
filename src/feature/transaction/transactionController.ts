import { Request, Response, NextFunction } from "express";
import { TransactionService } from "./transactionService";

export class TransactionController {
  static async createTransaction(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const courseId = req.params.courseId;
      const user = res.locals.user;
      const userId = user.uid;
      const transaction = await TransactionService.createTransaction(
        userId,
        courseId
      );
      res.status(200).json({
        message: "Transaction created successfully",
        data: transaction,
      });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

  static async handleSuccessPayment(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { order_id } = req.body;

      const transaction = await TransactionService.handleSuccessPayment(
        order_id
      );

      res.status(200).json({
        success: true,
        message: "Transaction status updated successfully",
        data: transaction,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllTransactions(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const transactions = await TransactionService.getAllTransactions();
      res.status(200).json({
        success: true,
        message: "Transactions retrieved successfully",
        data: transactions,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTransactionByUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = res.locals.user;
      const userId = user.uid;
      const transactions = await TransactionService.getTransactionByUserId(
        userId
      );
      res.status(200).json({
        success: true,
        message: "Transactions retrieved successfully",
        data: transactions,
      });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

  static async getTransactionByInstructorId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = res.locals.user;
      const userId = user.uid;
      const transactions =
        await TransactionService.getTransactionByInstructorId(userId);
      res.status(200).json({
        success: true,
        message: "Transactions retrieved successfully",
        data: transactions,
      });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

  static async resumeTransaction(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { orderId } = req.params;
      const user = res.locals.user;
      const transaction = await TransactionService.resumeTransaction(
        user.uid,
        orderId
      );
      res.status(200).json({
        success: true,
        message: "Transaction resumed successfully",
        data: transaction,
      });
    } catch (error: any) {
      if (error.code === "auth/id-token-expired") {
        res.status(401).json({ message: "Token expired" });
      } else if (error.code === "auth/argument-error") {
        res.status(400).json({ message: "Invalid token or arguments" });
        return;
      }
      next(error);
    }
  }

  //   static async handleNotification(
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ) {
  //     try {
  //       const notificationData = req.body;
  //       const transaction = await TransactionService.handleMidtransNotification(
  //         notificationData
  //       );
  //       res.status(200).json(transaction);
  //     } catch (error) {
  //       next(error);
  //     }
  //   }
}
