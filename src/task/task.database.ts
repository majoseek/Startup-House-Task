import { Sequelize } from "sequelize";
const database = new Sequelize("postgres", "postgres", "admin", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});
export default database;
