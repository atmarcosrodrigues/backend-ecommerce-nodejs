import { Response } from "express";
import { invalidRequest } from "../constants/httpResponseStatus";

const sendResponseError = (statusCode: number, msg: string, res: Response) => {
  res
    .status(statusCode || invalidRequest.CODE)
    .send(!!msg ? msg : invalidRequest.MESSAGE);
};

export default sendResponseError;
