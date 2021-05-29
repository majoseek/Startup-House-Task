import { Sequelize } from "sequelize";
import { Task } from "./task.interface";
import database from "./task.database";
import Task_model from "./task.model";
try {
    database.authenticate();
    console.log("Connection to database has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

/**
    *Returns task, which user is currently tracking
    @returns Promise<Task>
*/
export const get_task = async (): Promise<Task> => {
    const task = await Task_model.findOne({ where: { end_time: null } });
    if (task) {
        return {
            description: task.getDataValue("description"),
            start_time: task.getDataValue("start_time"),
            end_time: task.getDataValue("end_time"),
        };
    } else {
        return {
            description: "",
            start_time: null,
            end_time: null,
        };
    }
};

/**
 * Stops current task and adds new one
 * @param {Task} task new task to add
 * @returns Promise<null | void>
 */
export const add_task = async (task: Task): Promise<null | void> => {
    await stop_task();
    await Task_model.create({
        description: task.description,
        start_time: Sequelize.literal("CURRENT_TIMESTAMP"),
        end_time: null,
    });
    return;
};

/**
    *Stops current task
    @returns Promise<null | void>
*/
export const stop_task = async (): Promise<null | void> => {
    await Task_model.update(
        { end_time: Sequelize.literal("CURRENT_TIMESTAMP") },
        {
            where: {
                end_time: null,
            },
        }
    );
    return;
};
