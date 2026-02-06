import express from "express";


import { registerAdmin , 
    loginAdmin  ,
    getProfile
 } from "../controller/auth.controller.js";

 import authMiddleware from "../middelware/auth.middleware.js";
const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/profile", authMiddleware, getProfile);

export default router
