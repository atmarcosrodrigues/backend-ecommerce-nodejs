import { Request, Response, NextFunction } from "express";
import { UserAuthRequest } from "../types/UserAuthRequest";
import {
  internalServeError,
  unauthorizedUser,
} from "../constants/httpResponseStatus";
import User from "../models/User";
import verifyToken from "../auth/verifyToken";
import sendResponseError from "../middlewares/sendResponseError";
import IJwtPayload from "../types/JwtPayload";

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    sendResponseError(unauthorizedUser.CODE, unauthorizedUser.MESSAGE, res);
    return;
  } else if (!authorization.startsWith("Bearer ")) {
    sendResponseError(unauthorizedUser.CODE, unauthorizedUser.MESSAGE, res);
    return;
  }

  try {
    const payload = (await verifyToken(
      authorization.split(" ")[1]
    )) as IJwtPayload;

    if (payload) {
      const user = await User.findById(payload.id, { password: 0 });
      const userAuthReq = req as UserAuthRequest;
      if (user) userAuthReq["user"] = { ...user };
      next();
    } else {
      sendResponseError(unauthorizedUser.CODE, unauthorizedUser.MESSAGE, res);
    }
  } catch (err) {
    sendResponseError(internalServeError.CODE, `Error ${err}`, res);
  }
};

export default verifyUser;
