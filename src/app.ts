import express from "express";
import * as dotenv from "dotenv";
import { TaskRouter } from "./router";
import cors from "cors";

dotenv.config({ path: __dirname + "/.env" });
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/api", TaskRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
