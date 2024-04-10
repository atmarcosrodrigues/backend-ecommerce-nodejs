import { Request, Response } from "express";
import {
  createAccountSuccess,
  internalServeError,
} from "../../constants/httpResponseStatus";
import IUser from "../../types/User";
import sendResponseError from "../../middlewares/sendResponseError";
import { registerUser } from "../../services/userService";

const signUpUser = async (req: Request, res: Response) => {
  try {
    const user: IUser = { ...req.body };
    await registerUser(user);
    res.status(createAccountSuccess.CODE).send(createAccountSuccess.MESSAGE);
    return;
  } catch (err) {
    console.log(
      `ERROR: ${internalServeError.CODE}: ${internalServeError.MESSAGE}`,
      err
    );
    sendResponseError(internalServeError.CODE, internalServeError.MESSAGE, res);
    return;
  }
};

export default signUpUser;
