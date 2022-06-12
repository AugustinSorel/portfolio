import dotenv from "dotenv";
import nodemailer from "nodemailer";
import fs from "fs";

dotenv.config();
const htmlFile = fs.createReadStream(
  "./src/templates/confirmationEmail.template.html"
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

export const sendUserEmailToMe = (
  from: string,
  subject: string,
  text: string
) => {
  return transporter.sendMail({
    from,
    to: process.env.user,
    subject: `${from}-${subject}`,
    text,
  });
};

export const sendConfirmationEmail = async (to: string) => {
  return transporter.sendMail({
    from: process.env.user,
    to,
    subject: "Thanks for reaching out to me",
    html: htmlFile,
  });
};
