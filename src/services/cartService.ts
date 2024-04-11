import { Types } from "mongoose";
import Cart from "../models/Cart";

const getCartProducts = async (userId: Types.ObjectId) => {
  const carts = await Cart.find({ userId: userId }).populate("productId");
  return carts;
};

const addProductInCart = async (
  productId: string,
  count: number,
  userId: Types.ObjectId
) => {
  const cart = await Cart.findOneAndUpdate(
    { productId },
    { productId, count, userId: userId },
    { upsert: true }
  );
  return cart;
};

const deleteProductInCart = async (id: string) => {
  const _id = new Types.ObjectId(id);
  await Cart.findByIdAndDelete(_id);
};

export { getCartProducts, addProductInCart, deleteProductInCart };
