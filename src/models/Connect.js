import { Sequelize } from "sequelize";
import User from "./UserModel.js";
import Image from "./ImageModel.js";

const connect = new Sequelize("sequelize", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

User.initialize(connect);

Image.initialize(connect);

User.hasMany(Image, { foreignKey: "userId", as: "images" });

Image.belongsTo(User, { foreignKey: "userId" });

export { connect };
