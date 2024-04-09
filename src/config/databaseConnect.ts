import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://localhost:27017/ecomerceDB";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

export default connectDB;
