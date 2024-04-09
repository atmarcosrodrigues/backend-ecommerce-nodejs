import { Request, Response } from "express";
import { internalServeError } from "../../constants/httpResponseStatus";
import * as ProductService from "../../services/productService";

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res
      .status(internalServeError.CODE)
      .json({ message: internalServeError.MESSAGE });
  }
};

export default getProductById;
