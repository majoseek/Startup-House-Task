import express from "express";
import * as Task_Service from "./task.service";
import { Task } from "./task.interface";

export const TaskRouter = express.Router();

TaskRouter.get("/", (req, res) => {});
TaskRouter.post("/", (req, res) => {});
TaskRouter.put("/", (req, res) => {});
