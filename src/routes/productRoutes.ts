import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/product-controllers";

const productRoutes = express.Router();
productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProductById);

export default productRoutes;
