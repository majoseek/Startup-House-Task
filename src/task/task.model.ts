import { DataTypes } from "sequelize";
import database from "./task.database";

const Task_model = database.define(
    "task",
    {
        description: {
            type: DataTypes.STRING,
        },
        start_time: {
            type: DataTypes.STRING,
        },
        end_time: {
            type: DataTypes.DATE,
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        timestamps: false,
    }
);
export default Task_model;
