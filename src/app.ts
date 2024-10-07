import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ErrorMiddleware } from "./middleware/error_middleware";
import authRoute from "./feature/auth/authRoute";
import categoryRoutes from './feature/category/categoryRoute';


dotenv.config();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/categories', categoryRoutes);


app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/auth", authRoute);


app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.returnError);

export default app;
