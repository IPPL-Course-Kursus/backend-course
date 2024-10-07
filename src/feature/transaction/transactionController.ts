import { Request, Response } from "express";
import { TransactionService } from "./transactionService";
import { validateTransaction } from "./transactionValidation";

export class TransactionController {
  static async createTransaction(req: Request, res: Response) {
    try {
      const { error } = validateTransaction(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      const transaction = await TransactionService.createTransaction(req.body);
      return res.status(201).json(transaction);
    } catch (err: any) {
      return res.status(500).send(err?.message || "Something went wrong");
    }
  }

  static async getTransactionById(req: Request, res: Response) {
    try {
      const transaction = await TransactionService.getTransactionById(Number(req.params.id));
      if (!transaction) return res.status(404).send("Transaction not found");
      return res.status(200).json(transaction);
    } catch (err: any) {
      return res.status(500).send(err?.message || "Something went wrong");
    }
  }

  static async updateTransaction(req: Request, res: Response) {
    try {
      const { error } = validateTransaction(req.body, { partialUpdate: true });
      if (error) return res.status(400).send(error.details[0].message);

      const updatedTransaction = await TransactionService.updateTransaction(
        Number(req.params.id),
        req.body
      );
      if (!updatedTransaction) return res.status(404).send("Transaction not found");
      return res.status(200).json(updatedTransaction);
    } catch (err: any) {
      return res.status(500).send(err?.message || "Something went wrong");
    }
  }

  static async deleteTransaction(req: Request, res: Response) {
    try {
      const deletedTransaction = await TransactionService.deleteTransaction(Number(req.params.id));
      if (!deletedTransaction) return res.status(404).send("Transaction not found");
      return res.status(204).send();
    } catch (err: any) {
      return res.status(500).send(err?.message || "Something went wrong");
    }
  }

  static async getAllTransactions(req: Request, res: Response) {
    try {
      const transactions = await TransactionService.getAllTransactions();
      return res.status(200).json(transactions);
    } catch (err: any) {
      return res.status(500).send(err?.message || "Something went wrong");
    }
  }
}
