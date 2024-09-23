import express, { Express } from "express";

import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ErrorMiddleware } from "./middleware/error_middleware";
import authRoute from "./feature/auth/authRoute";
import typeCourseRoute from "./feature/typeCourse/typeCourseRoute";

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/auth", authRoute);

app.use('/api', typeCourseRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.returnError);

export default app;
