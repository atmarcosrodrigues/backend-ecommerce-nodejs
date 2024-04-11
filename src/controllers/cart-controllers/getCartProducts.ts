import { Request, Response } from "express";
import { CartRequest } from "../../types/CartRequest";
import * as cartService from "../../services/cartService";
import {
  getCartProductSuccess,
  internalServeError,
} from "../../constants/httpResponseStatus";
import sendResponseError from "../../middlewares/sendResponseError";

const getCartProducts = async (req: Request, res: Response) => {
  try {
    const cartReq = req as CartRequest;
    const carts = await cartService.getCartProducts(cartReq.user._id);
    res
      .status(getCartProductSuccess.CODE)
      .send({ status: getCartProductSuccess.MESSAGE, carts });
  } catch (err) {
    console.log(err);
    sendResponseError(internalServeError.CODE, `Error ${err}`, res);
  }
};

export default getCartProducts;
