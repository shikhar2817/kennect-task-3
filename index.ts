import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/health", (req: Request, res: Response) => {
    res.send("Server is healthy!");
});

app.listen(port, () => {
    console.log(`Server is running at PORT:${port}`);
});
