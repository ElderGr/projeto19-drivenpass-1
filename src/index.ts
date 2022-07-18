import express, { Request, Response, json } from "express";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import ErrorHandler from './events/AppError.js';
import AppLog from './events/AppLog.js';

import router from "./routes/index.js"

dotenv.config({ path: '.env' });

const app = express();
app.use(cors());
app.use(json());
app.use(helmet());
app.use(router);
app.use(ErrorHandler);

const PORT = +process.env.PORT || 5000;

app.get("/", (_req: Request, res: Response) => {
    res.send("Online");
});

app.listen(PORT, () => {
    AppLog('Server', `Server listening on port ${PORT}`);
});