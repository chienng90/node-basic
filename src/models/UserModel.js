import { Sequelize, DataTypes, Model } from "sequelize";
// import { connect } from "./Connect.js"; // Assuming `Connect.js` exports the Sequelize instance

const sequelize = new Sequelize("sequelize", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

class User extends Model {}

// Initialize the model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "password_hash",
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "last_name",
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "date_of_birth",
    },
  },
  {
    sequelize, // Use the Sequelize instance
    modelName: "User",
    tableName: "users", // Explicitly set the table name if different
    timestamps: true, // Disable automatic timestamps
  }
);

export default User;
