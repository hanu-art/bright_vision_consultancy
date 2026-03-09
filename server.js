// server.js
import { connectDB } from "./src/config/db.config.js";
import app from "./src/app.js";

const PORT = 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
};

startServer();
