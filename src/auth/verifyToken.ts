import jwt from "jsonwebtoken";
import { JWT } from "../config/auth";

const verifyToken = (token: string) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, JWT.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

export default verifyToken;
