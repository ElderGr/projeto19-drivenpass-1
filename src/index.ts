import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.get("/", (_req: Request, res: Response) => {
    res.send("Online");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});