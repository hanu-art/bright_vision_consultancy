
import jwt from "jsonwebtoken" 
import { jwtSecret } from "../config/env.config.js";
 const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 

    if (!token) throw new Error("Unauthorized");

    const decoded = jwt.verify(token,jwtSecret);
    req.user = decoded;

    next();
  } catch (err) {
    err.statusCode = 401;
    next(err);
  }
};  


export default authMiddleware
