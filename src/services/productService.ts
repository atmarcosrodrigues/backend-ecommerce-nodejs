import Product from "../models/Product";

const getProducts = async () => {
  const products = await Product.find({});
  return products;
};

const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  return product;
};

export { getProducts, getProductById };
