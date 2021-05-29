import express from "express";
import * as Task_Service from "./task/task.service";
import { Task } from "./task/task.interface";

export const TaskRouter = express.Router();
TaskRouter.get("/", async (req, res) => {
    const task: Task = await Task_Service.get_task();
    if (task.description.length > 0)
        res.status(200).json({ message: "Current task found", task: task });
    else res.status(200).json({ message: "No current task", task: null });
});
TaskRouter.post("/", async (req, res) => {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        //Check if request body isnt empty
        res.status(400).send("No data provided!");
    } else {
        await Task_Service.add_task({
            description: req.body.description,
            start_time: null,
            end_time: null,
        });
        res.status(200).send("Tracking new task");
    }
});
TaskRouter.put("/", async (req, res) => {
    await Task_Service.stop_task();
    res.status(200).send("Stopped tracking current task");
});
