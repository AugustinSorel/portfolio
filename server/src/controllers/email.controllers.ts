import { NextFunction } from "connect";
import { Request, Response } from "express";
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
    return res.sendStatus(500);
  }

  try {
    await sendConfirmationEmail(email);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }

  res.sendStatus(200);
};
