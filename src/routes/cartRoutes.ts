import express from "express";

import verifyUser from "../middlewares/verifyUser";
import {
  addProductInCart,
  deleteProductInCart,
  getCartProducts,
} from "../controllers/cart-controllers";

const cartRoutes = express.Router();

cartRoutes
  .route("/")
  .get([verifyUser], getCartProducts)
  .post([verifyUser], addProductInCart);

cartRoutes.route("/:id").delete([verifyUser], deleteProductInCart);

export default cartRoutes;
