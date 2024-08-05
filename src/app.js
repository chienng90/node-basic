import bodyParser from "body-parser";
import express from "express";
import rootRouter from "./routes/RootRoute.js";

const app = express();

// Parser JSON request body
app.use(bodyParser.json({}));
app.use(rootRouter);

app.listen(4000, async () => {
  console.log(`Server is running on http://localhost:4000`);
});
