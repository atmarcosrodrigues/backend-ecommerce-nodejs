import { Request, Response } from "express";
import { CartRequest } from "../../types/CartRequest";
import {
  addCartProductSuccess,
  internalServeError,
} from "../../constants/httpResponseStatus";
import * as cartService from "../../services/cartService";
import sendResponseError from "../../middlewares/sendResponseError";

const addProductInCart = async (req: Request, res: Response) => {
  const cartReq = req as CartRequest;
  const { productId, count } = cartReq.body;
  try {
    const cart = await cartService.addProductInCart(
      productId,
      count,
      cartReq.user._id
    );
    res
      .status(addCartProductSuccess.CODE)
      .send({ status: addCartProductSuccess.MESSAGE, cart });
  } catch (err) {
    console.log(err);
    sendResponseError(internalServeError.CODE, `Error ${err}`, res);
  }
};

export default addProductInCart;
