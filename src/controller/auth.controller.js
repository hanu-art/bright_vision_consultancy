import { registerAdminService ,
  loginAdminService , 
  getProfileService
 } from "../services/auth.services.js"; 

import { successResponse } from "../../utils/response.utils.js"; 

export const registerAdmin = async (req, res, next) => {
  try {
   let userId = await registerAdminService(req.body); 

    successResponse(res, "Admin registered successfully" ,{userId});
  } catch (err) {
    next(err);
  }
};

export  const loginAdmin = async (req, res, next) => {
  try {
    const token = await loginAdminService(req.body);
    successResponse(res, "Login successful", { token });
  } catch (err) {
    next(err);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const profile = await getProfileService(req.user.id);
    successResponse(res, "Profile fetched", profile);
  } catch (err) {
    next(err);
  }
};
