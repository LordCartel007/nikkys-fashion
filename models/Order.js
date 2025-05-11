import { Schema, models, model } from "mongoose";

const OrderSchema = new Schema(
  {
    product_Items: { type: Array, default: [] },
    name: String,
    email: String,
    city: String,
    phoneNumber: Number,
    postalCode: String,
    streetAddress: String,
    country: String,
    paid: Boolean,
  },
  {
    timestamps: true,
  }
);

const Order = models?.Order || model("Order", OrderSchema);

export default Order;
