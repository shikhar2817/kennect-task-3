import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { addDate } from "./utils/dateParser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/health", (req: Request, res: Response) => {
    res.send("Server is healthy!");
});

app.get("/add", (req: Request, res: Response) => {
    try {
        const { days, weeks, to } = req.query;
        const newDate = addDate(
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
