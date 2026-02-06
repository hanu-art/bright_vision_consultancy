// src/config/db.config.js
import mysql2 from "mysql2/promise";
import { dbData } from "./env.config.js";


const pool = mysql2.createPool({
  host: dbData.host,
  user: dbData.user,
  password: dbData.password,
  database: dbData.database,
  port: dbData.port,
  waitForConnections: true,
  connectionLimit: 10,
});

export const connectDB = async () => {
  try {
    const conn = await pool.getConnection();
    console.log("MySQL connected");
    conn.release();
  } catch (error) {
    console.error(" MySQL connection failed:", error.message);
    process.exit(1);
  }
};

export default pool;
