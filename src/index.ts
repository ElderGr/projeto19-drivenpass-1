import express, { Request, Response, json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";

//import ErrorHandler from './events/AppError';
//import AppLog from './events/AppLog';

//import router from "./routes/index"

dotenv.config({ path: '.env' });

const app = express();
app.use(cors());
app.use(json());
app.use(helmet());
//app.use(router);
//app.use(ErrorHandler);

const PORT = +process.env.PORT || 5000;

app.get("/", (_req: Request, res: Response) => {
    res.send("Online");
});

app.listen(PORT, () => {
    //AppLog('Server', `Server listening on port ${PORT}`);
    console.log("Server listening on port " + PORT);
});