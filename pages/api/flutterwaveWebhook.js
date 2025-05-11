import { mongooseConnect } from "../../lib/mongoose";
import Order from "../../models/Order";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await mongooseConnect();

    const {
      line_items,
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      paid,
    } = req.body;

    if (
      !line_items ||
      !name ||
      !email ||
      !city ||
      !postalCode ||
      !streetAddress ||
      !country
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newOrder = await Order.create({
      line_items,
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      paid,
    });

    return res.status(201).json(newOrder);
  } catch (error) {
    console.error("Failed to create order:", error);
    return res.status(500).json({ error: "Failed to create order" });
  }
}
