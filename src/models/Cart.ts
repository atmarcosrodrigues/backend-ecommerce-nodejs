import mongoose from "mongoose";

const Schema = mongoose.Schema;
const cartSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "product",
      required: true,
    },
    count: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", cartSchema);
export default Cart;
