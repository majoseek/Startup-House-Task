import { Sequelize } from "sequelize";
const database = new Sequelize("postgres", "postgres", "admin", {
    host: "db",
    dialect: "postgres",
    logging: false,
});
export default database;
