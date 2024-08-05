import { Sequelize } from "sequelize";

const connect = new Sequelize("sequelize", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export { connect };
