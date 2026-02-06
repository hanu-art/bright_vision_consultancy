import { createStudent,
    getAllStudents ,
    getStudentById ,
    deleteStudentById
 } from "../model/students.model.js";  


export const createStudentService = async (data) => {
  if (!data.name || !data.email) {
    throw new Error("Name and email are required");
  }

  const studentId = await createStudent(data);
  return studentId;
};

export const getAllStudentsService = async () => {
  return await getAllStudents();
};


export const getStudentByIdService = async (id) => {
  const student = await getStudentById(id);
  if (!student) {
    throw new Error("Student not found");
  }
  return student;
};

export const deleteStudentByIdService = async (id) => {
  const deleted = await deleteStudentById(id);
  if (!deleted) {
    throw new Error("Student not found");
  }
  return true;
};