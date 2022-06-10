import express from "express";
import emailRoutes from "./email.routes";

const router = express.Router();

router.get("/health-check", (req, res) => res.sendStatus(200));
router.use("/email", emailRoutes);

export default router;
