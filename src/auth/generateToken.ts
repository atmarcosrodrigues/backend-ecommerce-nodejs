import jwt from "jsonwebtoken";
import IUser from "../types/user";
import { JWT } from "../config/auth";

const generateToken = (user: IUser) => {
  return jwt.sign({ id: user._id }, JWT.jwt, {
    expiresIn: JWT.jwtExp,
  });
};

export default generateToken;
