import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import compression from "compression";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import xss from "xss-clean";

const app = express();

import TestCaseRouter from "./routes/TestCaseRouter.js";
import UserRouter from "./routes/UserRouter.js";
import ProjectRouter from "./routes/ProjectRouter.js";
import TestCaseRunRouter from "./routes/TestRunRouter.js";

// Core
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(compression());

// Security
app.use(helmet());
app.use(hpp());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  }),
);
app.use("/api/testcase", TestCaseRouter);
app.use("/api/user", UserRouter);
app.use("/api/project", ProjectRouter);
app.use("/api/runs", TestCaseRunRouter);
export default app;
