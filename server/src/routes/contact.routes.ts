import express from "express";
import { newMessage } from "../controllers/contact.controllers";
import validateRessource from "../middlewares/validateRessource.middleware";
import { contactSchema } from "../schemas/contact.schema";

const contactRoutes = express.Router();

contactRoutes.post(
  "/new-message",
  validateRessource(contactSchema),
  newMessage
);

export default contactRoutes;
