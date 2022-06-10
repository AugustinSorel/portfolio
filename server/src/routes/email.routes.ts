import express from "express";
import { newMessage } from "../controllers/email.controllers";
import validateRessource from "../middlewares/validateRessource.middleware";
import { emailSchema } from "../schemas/email.schema";

const contactRoutes = express.Router();

contactRoutes.post("/", validateRessource(emailSchema), newMessage);

export default contactRoutes;
