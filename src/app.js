import express from "express";
import rootRouter from "./routes/RootRouter.js";
import { connect } from "./models/Connect.js";
import User from "./models/UserModel.js";

const app = express();

app.use(rootRouter);

app.listen(4000, async () => {
  console.log(`Server is running on http://localhost:4000`);
  try {
    await connect.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.log("Unable to connect to the database");
  }
});
