import express from "express";
import apiError from "./middlewares/apiError.middleware";
import router from "./routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", router);
app.use(apiError);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
