import { invalidUserData } from "../constants/httpResponseStatus";

class UserNotFoundError extends Error {
  status: number;

  constructor(
    message = invalidUserData.MESSAGE,
    statusCode = invalidUserData.CODE
  ) {
    super(message);
    this.name = "UserNotFoundError";
    this.status = statusCode;
  }
}

export default UserNotFoundError;
