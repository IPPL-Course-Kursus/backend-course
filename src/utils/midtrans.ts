import midtransClient from "midtrans-client";
import dotenv from "dotenv";
dotenv.config();

const midtransSnap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.PRIVATE_SERVER_KEY || "",
  clientKey: process.env.PRIVATE_CLIENT_KEY || "",
});

export default midtransSnap;
