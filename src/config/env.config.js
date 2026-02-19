import dotenv from "dotenv";
import path from "path";


dotenv.config();


export const dbData = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
}; 

export const jwtSecret = process.env.JWT_SECRET;


export const deepSeek ={
  DEEPSEEK_API_URL: process.env.DEEPSEEK_API_URL,
  DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
  RATE_LIMIT_WINDOW: Number(process.env.RATE_LIMIT_WINDOW),
  RATE_LIMIT_MAX: Number(process.env.RATE_LIMIT_MAX),
}

export const allowedOrigins = process.env.ALLOWED_ORIGINS;