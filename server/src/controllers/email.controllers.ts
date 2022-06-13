import { NextFunction } from "connect";
import { Request, Response } from "express";
import EmailError from "../errors/email.error";
import { EmailSchema } from "../schemas/email.schema";
import {
  sendConfirmationEmail,
  sendUserEmailToMe,
} from "../services/email.service";

export const newMessage = async (
  req: Request<{}, {}, EmailSchema>,
  res: Response,
  next: NextFunction
) => {
  const { email, title, message } = req.body;

  try {
    await sendUserEmailToMe(email, title, message);
  } catch (error) {
    console.log(error);
    return next(EmailError.unableToSendEmail());
  }

  try {
    await sendConfirmationEmail(email);
  } catch (error) {
    console.log(error);
    return next(EmailError.unableToSendEmail());
  }

  res.sendStatus(200);
};
