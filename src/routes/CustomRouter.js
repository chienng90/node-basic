import express from "express";
import controller from "../controllers/Controller.js";
import secondMiddleware from "../middlewares/SecondMiddleware.js";
import thirdMiddleware from "../middlewares/ThirdMiddleware.js";

const customRouter = express.Router();

customRouter.get("/endpoint1", controller);
customRouter.use(secondMiddleware);
customRouter.get("/endpoint2", controller);
customRouter.get("/endpoint3", thirdMiddleware, controller);

export default customRouter;
