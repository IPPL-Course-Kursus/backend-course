import Joi from "joi";

// Fungsi validasi untuk transaksi
export const validateTransaction = (data: any, options: { partialUpdate?: boolean } = {}) => {
  // Buat schema dasar
  let schema = Joi.object({
    userId: Joi.number().required(),
    courseId: Joi.number().required(),
    courseName: Joi.string().required(),
    orderId: Joi.number().required(),
    ppn: Joi.number().required(),
    price: Joi.number().required(),
    totalPrice: Joi.number().required(),
    paymentStatus: Joi.string().valid("PAID", "PENDING", "FAILED").required(),
    paymentMethod: Joi.string().valid("CREDIT_CARD", "BANK_TRANSFER", "EWALLET").required(),
    linkPayment: Joi.string().uri().required(),
  });

  // Jika partialUpdate true, semua field menjadi optional
  if (options.partialUpdate) {
    schema = schema.fork(Object.keys(schema.describe().keys), (field) =>
      field.optional()
    );
  }

  // Validasi data yang diberikan
  return schema.validate(data);
};
