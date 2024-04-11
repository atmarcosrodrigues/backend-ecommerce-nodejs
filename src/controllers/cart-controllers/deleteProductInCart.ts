import { Request, Response } from "express";
import * as cartService from "../../services/cartService";
import {
  deleteCartProductSuccess,
  internalServeError,
} from "../../constants/httpResponseStatus";
import sendResponseError from "../../middlewares/sendResponseError";

const deleteProductInCart = async (req: Request, res: Response) => {
  try {
    await cartService.deleteProductInCart(req.params.id);
    res
      .status(deleteCartProductSuccess.CODE)
      .send({ status: deleteCartProductSuccess.MESSAGE });
  } catch (err) {
    console.log(err);
    sendResponseError(internalServeError.CODE, `Error ${err}`, res);
  }
};

export default deleteProductInCart;
