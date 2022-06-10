import { NextFunction, Request, Response } from "express";
import EmailError from "../errors/email.error";
import ZodError from "../errors/zod.error";

const apiError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ERROR in apiError", err);

  if (err instanceof ZodError) {
    return res
      .status(err.code)
      .json({ message: err.message, field: err.field });
  }

  if (err instanceof EmailError) {
    console.log({ message: err.message, field: err.field });

    return res
      .status(err.code)
      .json({ message: err.message, field: err.field });
  }

  return res.status(500).send("Internal server error");
};

export default apiError;
