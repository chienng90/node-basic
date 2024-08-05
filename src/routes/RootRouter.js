import express from "express";
import firstMiddleware from "../middlewares/FirstMiddleware.js";
import customRouter from "./CustomRouter.js";
import { userRouter } from "./UserRouter.js";

const rootRouter = express.Router();

rootRouter.use(firstMiddleware);
rootRouter.use(customRouter);
rootRouter.use(userRouter);

console.log("Root Router");

export default rootRouter;
