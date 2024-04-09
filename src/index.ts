import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/databaseConnect";
import productRoutes from "./routes/productRoutes";

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

const app = express();
dotenv.config();
connectDB();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST}:${PORT}`);
});

app.get(["/", "/api"], (req, res) => {
  res.send("Products E-Commerce Backend API");
});

app.use("/api/products", productRoutes);
