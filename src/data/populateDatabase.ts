import dotenv from "dotenv";

import connectDB from "../config/databaseConnect";
import Product from "../models/Product";
import { products } from "./products";

dotenv.config();
connectDB();

const populateDatabase = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Data Import Success");
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

populateDatabase();
