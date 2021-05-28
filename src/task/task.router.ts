import express from "express";
import * as Task_Service from "./task.service";
import { Task } from "./task.interface";

export const TaskRouter = express.Router();
TaskRouter.get("/", async (req, res) => {
    const task: Task = await Task_Service.get_task();
    if (task.description.length > 0)
        res.status(200).send(`Current task: ${task.description}`);
    else res.status(200).send("There is no current task");
});
TaskRouter.post("/", async (req, res) => {
    await Task_Service.add_task({
        description: req.body.description,
        start_time: null,
        end_time: null,
    });
    res.status(200).send("Tracking new task");
});
TaskRouter.put("/", async (req, res) => {
    await Task_Service.stop_task();
    res.status(200).send("Stopped tracking current task");
});
