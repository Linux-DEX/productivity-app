import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MAIN_ROUTE } from "./config/service.config";
import { router } from "./routes";

// for Cognito Identity Pool fetch support in Node.js
import fetch from "cross-fetch";
(globalThis as any).fetch = fetch;

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(`/${MAIN_ROUTE}`, router);

export { app };
