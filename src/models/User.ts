import mongoose from "mongoose";
import IUser from "../types/User";

const Schema = mongoose.Schema;
const userSchema = new Schema<IUser>(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
export default User;
