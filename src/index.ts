import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/databaseConnect";

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

const app = express();
dotenv.config();
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST}:${PORT}`);
});
