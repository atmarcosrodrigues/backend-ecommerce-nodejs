import { Request, Response } from "express";
import { UserAuthRequest } from "../../types/UserAuthRequest";
import { loginSuccess } from "../../constants/httpResponseStatus";

const getUser = async (req: Request, res: Response) => {
  const userAuthReq = req as UserAuthRequest;
  res.status(loginSuccess.CODE).send({ user: userAuthReq.user });
};

export default getUser;
