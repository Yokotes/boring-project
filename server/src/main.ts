import express from "express";
import { authRouter } from "./routes";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// TODO: Replace later since depricated
app.use(cors());
app.use(bodyParser.json());
app.use(authRouter);

export const viteNodeApp = app;
