import { createStudentService ,
    getAllStudentsService ,
    getStudentByIdService ,
    deleteStudentByIdService
} from "../services/students.service.js";

import { successResponse } from "../../utils/response.utils.js";
export const createStudentController = async (req, res, next) => {
  try {
    const studentId = await createStudentService(req.body);

    return successResponse(
      res,
      "Student added successfully",
      { students_id: studentId }
    );
  } catch (err) {
    next(err);
  }
};

export const getAllStudentsController = async (req, res, next) => {
  try {
    const students = await getAllStudentsService();

    return successResponse(
      res,
      "Students fetched successfully",
      students
    );
  } catch (err) {
    next(err);
  }
}; 



export const getStudentByIdController = async (req, res, next) => {
  try {
    const student = await getStudentByIdService(req.params.id);
     console.log(student);
    return successResponse(
      res,
      "Student fetched successfully",
      student
    );
  } catch (err) {
    next(err);
  }
};

export const deleteStudentByIdController = async (req, res, next) => {
  try {
    await deleteStudentByIdService(req.params.id);

    return successResponse(
      res,
      "Student deleted successfully"
    );
  } catch (err) {
    next(err);
  }
};