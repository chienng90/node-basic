import express from "express";
import { getUser, getUsers } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUser);

export { userRouter };
