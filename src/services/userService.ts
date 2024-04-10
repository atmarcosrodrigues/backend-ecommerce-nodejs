import bcrypt from "bcrypt";

import IUser from "../types/User";
import User from "../models/User";
import checkPassword from "../auth/checkPassword";
import UserNotFoundError from "../exceptions/UserNotFoundError";
import generateToken from "../auth/generateToken";

const registerUser = async (user: IUser) => {
  const hash = await bcrypt.hash(user.password, 8);
  await User.create({ ...user, password: hash });
};

const signInUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!!!user) {
    throw new UserNotFoundError();
  }

  const passwordValidation = await checkPassword(password, user.password);
  if (passwordValidation) {
    let token = generateToken({ ...user });
    return token;
  } else {
    throw new UserNotFoundError();
  }
};

export { registerUser, signInUser };
