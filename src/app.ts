import express from "express";
import * as dotenv from "dotenv";
import { Client } from "pg";
import { TaskRouter } from "./task/task.router";
import cors from "cors";

dotenv.config({ path: __dirname + "/.env" });
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
