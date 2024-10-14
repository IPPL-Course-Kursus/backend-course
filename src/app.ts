import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan"; // Pastikan kamu mengimpor morgan
import { ErrorMiddleware } from "./middleware/error_middleware";
import authRoute from "./feature/auth/authRoute";
import interpreterRoute from "./feature/interpreter/interpreterRoute"; // Import interpreter route

dotenv.config();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route untuk otentikasi
app.use("/auth", authRoute);

// Route untuk interpreter
app.use("/interpreters", interpreterRoute); // Tambahkan route untuk interpreter

app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.returnError);

export default app;
