export enum PaymentStatus {
  pending = "pending",
  settlement = "settlement",
  deny = "deny",
  cancel = "cancel",
  expire = "expire",
}

export type Transaction = {
  orderId: string;
  paymentStatus: PaymentStatus;
};
