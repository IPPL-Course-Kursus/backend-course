import { Router } from "express";
import { TransactionController } from "./transactionController";

const router = Router(); 

router.post("/transactions", TransactionController.createTransaction);
router.get("/transactions/:id", TransactionController.getTransactionById);
router.put("/transactions/:id", TransactionController.updateTransaction);
router.delete("/transactions/:id", TransactionController.deleteTransaction);

export default router;
