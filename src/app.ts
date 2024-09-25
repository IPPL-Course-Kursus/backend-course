import express, { Express } from "express";

import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ErrorMiddleware } from "./middleware/error_middleware";
import authRoute from "./feature/auth/authRoute";
import typeCourseRoute from "./feature/typeCourse/typeCourseRoute";
import contentRoutes from './feature/content/contentRoute';
import interpreterRoutes from './feature/interpreter/interpreterRoute';


dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/auth", authRoute);

app.use('/api/type-courses', typeCourseRoute);
app.use('/contents', contentRoutes);
app.use('/api/interpreters', interpreterRoutes);


app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.returnError);

export default app;
