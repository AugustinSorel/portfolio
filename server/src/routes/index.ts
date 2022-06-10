import express from "express";
import contactRoutes from "./contact.routes";

const router = express.Router();

router.get("/health-check", (req, res) => res.sendStatus(200));
router.use("/contact", contactRoutes);

export default router;
