import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { jwtSecret } from "../config/env.config.js";
import { findUserById ,
    createUser,
    findUserByEmail
 } from "../model/user.model.js";
 
export const registerAdminService = async (data) => {
  const existingUser = await findUserByEmail(data.email);
  if (existingUser) {
    throw new Error("Admin already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const userId = await createUser({
    name: data.name,
    email: data.email,
    password: hashedPassword,
  });

  return userId;
};

export const loginAdminService = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    jwtSecret,
    { expiresIn: "7d" }
  );

  return token;
};

export const getProfileService = async (userId) => {
  return await findUserById(userId);
};
