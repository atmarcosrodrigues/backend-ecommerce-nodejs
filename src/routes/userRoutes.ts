import express from "express";
const userRoutes = express.Router();

import verifyUser from "../middlewares/verifyUser";
import {
  signUpUser,
  signInUser,
  getUser,
} from "../controllers/user-controllers";

userRoutes.post("/signup", signUpUser);
userRoutes.post("/signin", signInUser);
userRoutes.route("/me").get([verifyUser], getUser);

export default userRoutes;
