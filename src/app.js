import express from "express";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middelware/auth.middleware.js"
import studentRoutes from "./routes/students.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import { allowedOrigins } from "./config/env.config.js";


import cors from "cors"
const app = express();


const allowedOriginsCors = allowedOrigins.split(",")

app.use(
  cors({
    origin: function (origin, callback) {

      // allow requests with no origin (like mobile apps or postman)
      if (!origin) return callback(null, true);

      if (allowedOriginsCors.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/students", studentRoutes);  



app.use('/api/deepseek', chatRoutes); 

app.use(errorHandler); 

export default app
