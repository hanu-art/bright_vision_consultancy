import express from "express";
import authMiddleware from "../middelware/auth.middleware.js";

import { createStudentController,
    getAllStudentsController ,
    getStudentByIdController ,
    deleteStudentByIdController
 } from "../controller/students.controller.js";
// agar future me admin auth lagana ho
// import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// ✅ Create student (Admin form submit)
router.post(
  "/post",
  // authMiddleware,   // baad me enable kar sakte ho
  createStudentController
);

// ✅ Get all students (Admin list view)
router.get(
  "/get",
   authMiddleware,
  getAllStudentsController
);
 


router.get("/get/:id",authMiddleware, getStudentByIdController);
router.delete("/delete/:id", authMiddleware, deleteStudentByIdController);

export default router
