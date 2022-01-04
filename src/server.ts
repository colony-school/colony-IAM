import express, { Application, Request, Response } from "express";

import { healthcheck } from "./routes";

const app: Application = express();
const port = process.env.PORT || 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", healthcheck);
app.get("/healthcheck", healthcheck);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}
