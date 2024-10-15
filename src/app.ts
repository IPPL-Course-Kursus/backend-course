import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ErrorMiddleware } from "./middleware/error_middleware";
import authRoute from "./feature/auth/authRoute";
import courseRoute from "./feature/course/courseRoute";
import courseUserRoute from "./feature/courseUser/courseUserRoute";
import typeCourseRoute from "./feature/typeCourse/typeCourseRoute";
import categoryRoute from "./feature/category/categoryRoute";
import courseLevelRoute from "./feature/courseLevel/courseLevelRoute";
import transactionRoute from "./feature/transaction/transactionRoute";
import courseCertificateRoute from "./feature/courseCertificate/courseCertificateRoute";
import chapteryRoute from "./feature/chapter/chapterRoute";
import contentRoute from "./feature/content/contentRoute";
import morgan from "morgan";

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
app.use("/auth", authRoute);
app.use("/course", courseRoute);
app.use("/course-user", courseUserRoute);
app.use("/type-course", typeCourseRoute);
app.use("/category", categoryRoute);
app.use("/course-level", courseLevelRoute);
app.use("/transaction", transactionRoute);
app.use("/certificate", courseCertificateRoute);
app.use("/chapter", chapteryRoute);
app.use("/content", contentRoute);

app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.returnError);

export default app;
