import { Request } from "express";
import IUser from "./User";

export interface CartRequest extends Request {
  user: IUser;
  productId: string;
  count: number;
}
