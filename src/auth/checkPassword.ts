import bcrypt from "bcrypt";

const checkPassword = (password: string, passwordHash: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err: unknown, same: unknown) => {
      if (err) {
        reject(err);
      }

      resolve(same);
    });
  });
};

export default checkPassword;
