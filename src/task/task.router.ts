import express from "express";
import * as Task_Service from "./task.service";
import { Task } from "./task.interface";

export const TaskRouter = express.Router();
TaskRouter.get("/", async (req, res) => {
    const task: Task = await Task_Service.get_task();
    if (task) res.status(200).json(task);
    else res.status(204).send("There is no current task");
});
TaskRouter.post("/", async (req, res) => {
    await Task_Service.add_task({
        description: req.body.description,
        start_time: req.body.start_time,
        end_time: null,
    });
    res.status(200).send("New task addedd");
});
TaskRouter.put("/", (req, res) => {});
