import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class TransactionService {
  // Membuat transaksi baru
  static async createTransaction(data: any) {
    return await prisma.transaction.create({
      data,
    });
  }

  // Mengambil transaksi berdasarkan ID
  static async getTransactionById(id: number) {
    return await prisma.transaction.findUnique({
      where: { id },
    });
  }

  // Memperbarui transaksi berdasarkan ID
  static async updateTransaction(id: number, data: any) {
    return await prisma.transaction.update({
      where: { id },
      data,
    });
  }

  // Menghapus transaksi berdasarkan ID
  static async deleteTransaction(id: number) {
    return await prisma.transaction.delete({
      where: { id },
    });
  }

  // Mengambil semua transaksi
  static async getAllTransactions() {
    return await prisma.transaction.findMany(); // Mengambil semua transaksi dari database
  }
}
