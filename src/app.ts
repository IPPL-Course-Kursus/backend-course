import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan"; // Pastikan morgan diimport
import { ErrorMiddleware } from "./middleware/error_middleware";
import authRoute from "./feature/auth/authRoute";
import certificateRoute from "./feature/certificate/certificateRoutes"; // Sesuaikan dengan path yang benar

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

// Menambahkan route untuk certificates
app.use("/certificates", certificateRoute); // Route untuk certificates

app.use("/auth", authRoute);

app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.returnError);

export default app;
