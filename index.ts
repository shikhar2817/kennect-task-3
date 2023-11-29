import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getNewDate } from "./utils/dateParser";
import { Opertation } from "./types";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome, Try api routes given in the readme file in github repo.");
});

app.get("/health", (req: Request, res: Response) => {
    res.send("Server is healthy!");
});

app.get("/api", (req: Request, res: Response) => {
    try {
        const { operation, days, weeks, to } = req.query;
        const newDate = getNewDate(
            (operation ?? "subtract") as Opertation,
            Number(days ?? 0),
            Number(weeks ?? 0),
            to as string
        );
        res.status(200).json({
            date: newDate.toLocaleDateString(),
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at PORT:${port}`);
});
