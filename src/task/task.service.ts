import { Client } from "pg";
import { Task } from "./task.interface";

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "admin",
    port: 5432,
});
client.connect();

export const get_task = async (): Promise<Task> => {
    const { rows } = await client.query(
        "SELECT * FROM tasks WHERE end_time IS NULL"
    );
    if (rows && rows.length > 0) return rows[0];
    else
        return {
            description: "",
            start_time: null,
            end_time: null,
        };
};
export const add_task = async (task: Task): Promise<null | void> => {
    await stop_task();
    await client.query(
        `INSERT INTO tasks(description,start_time,end_time) VALUES('${task.description}',current_timestamp,NULL)`
    );
    return;
};
export const stop_task = async (): Promise<null | void> => {
    await client.query(`UPDATE tasks
    SET end_time=current_timestamp
    WHERE end_time IS NULL`);
    return;
};
