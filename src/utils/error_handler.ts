import { Request, Response, NextFunction } from "express";

export const errorHandlesr = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const response: Record<string, any> = {
    status,
    error: err.error || "Internal Server Error",
    message: err.message || "An error occurred",
  };
  if (err.cause) {
    response["cause"] = err.cause;
  }
  res.status(status).json(response);
};
