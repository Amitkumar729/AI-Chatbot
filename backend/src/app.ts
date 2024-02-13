import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";

config();

const app = express();


//middleware...
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//it will be removed in the production...
app.use(morgan("dev")); //logs all requests to the console in dev mode...

app.use("/api/v1", appRouter);

export default app;
