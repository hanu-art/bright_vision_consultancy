import express from "express";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middelware/auth.middleware.js"
import studentRoutes from "./routes/students.routes.js";
import cors from "cors"
const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/students", studentRoutes);
app.use(errorHandler);

export default app;
