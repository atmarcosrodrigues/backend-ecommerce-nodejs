import { Request, Response } from "express";
import { internalServeError } from "../../constants/httpResponseStatus";
import * as ProductService from "../../services/productService";

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res
      .status(internalServeError.CODE)
      .json({ message: internalServeError.MESSAGE });
  }
};

export default getProducts;
