import { Request, Response } from "express";
import {
  internalServeError,
  loginSuccess,
} from "../../constants/httpResponseStatus";
import sendResponseError from "../../middlewares/sendResponseError";
import UserNotFoundError from "../../exceptions/UserNotFoundError";
import * as userService from "../../services/userService";

const signInUser = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;
    const userToken = await userService.signInUser(email, password);
    res
      .status(loginSuccess.CODE)
      .send({ status: loginSuccess.MESSAGE, userToken });
  } catch (err) {
    if (err instanceof UserNotFoundError)
      sendResponseError(err.status, err.message, res);
    else
      sendResponseError(
        internalServeError.CODE,
        internalServeError.MESSAGE,
        res
      );
  }
};

export default signInUser;
