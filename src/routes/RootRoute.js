import express from "express";
import testRouter from "./TestRoute.js";

const rootRouter = express.Router();

rootRouter.use(testRouter);

export default rootRouter;
