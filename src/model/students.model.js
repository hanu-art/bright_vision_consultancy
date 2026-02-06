import pool from "../config/db.config.js";

export const createStudent = async (data) => {
  const { name, email, phone, gender, description } = data;

  const [result] = await pool.query(
    `INSERT INTO students (name, email, phone, gender, description)
     VALUES (?, ?, ?, ?, ?)`,
    [name, email, phone, gender, description]
  );

  return result.insertId;
};

export const getAllStudents = async () => {
  const [rows] = await pool.query(
    `SELECT students_id, name, email, phone, gender, description, created_at
     FROM students
     ORDER BY students_id DESC`
  );

  return rows;
};



export const getStudentById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM students WHERE students_id = ?",
    [id]
  );
  return rows[0];
};

export const deleteStudentById = async (id) => {
  const [result] = await pool.query(
    "DELETE FROM students WHERE students_id = ?",
    [id]
  );
  return result.affectedRows;
};