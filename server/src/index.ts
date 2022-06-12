import express from "express";
import apiError from "./middlewares/apiError.middleware";
import router from "./routes";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api", router);
app.use(apiError);
app.use("/api", express.static(path.join(__dirname, "../public")));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
