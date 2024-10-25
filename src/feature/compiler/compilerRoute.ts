import { Router } from "express";
import { CompilerController } from "./compilerController";

const compilerRoute: Router = Router();

compilerRoute.post("/compile", CompilerController.compile);

export default compilerRoute;
