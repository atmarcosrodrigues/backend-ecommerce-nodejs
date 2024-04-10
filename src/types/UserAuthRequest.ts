import { Request } from "express";
import IUser from "./User";

export interface UserAuthRequest extends Request {
  user: IUser;
}
