import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { authRouter, exerciseRouter } from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// TODO: Create one router
app.use(authRouter);
app.use(exerciseRouter);

export const viteNodeApp = app;
