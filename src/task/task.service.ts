import { Task } from "./task.interface";
export const get_task = async (): Promise<Task> => {
    return { description: "", start_time: new Date(), end_time: new Date() };
};
export const add_task = async (task: Task): Promise<null | void> => {};
export const stop_task = async (): Promise<null | void> => {};
