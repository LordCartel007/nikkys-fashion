import mongoose from "mongoose";
import Order from "../../models/Order"; // Adjust the path as necessary

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
      }

      const newOrder = new Order(req.body);
      await newOrder.save();

      res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
      console.error("Error saving order:", error); // Log error for debugging
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
