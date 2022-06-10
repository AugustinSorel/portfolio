import { NextFunction } from "connect";
import { Request, Response } from "express";
import { EmailSchema } from "../schemas/email.schema";

export const newMessage = (
  req: Request<{}, {}, EmailSchema>,
  res: Response,
  next: NextFunction
) => {
  const { email, message, title } = req.body;

  // send me an email

  // send a confirmation email to the user

  res.sendStatus(200);
};
