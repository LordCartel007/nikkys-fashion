// import { mongooseConnect } from "../../lib/mongoose";
// const stripe = require("stripe")(process.env.STRIPE_SK);
// import { buffer } from "micro";
// import { Order } from "../../models/Order";

// // This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret =
//   "whsec_f48a462bfb6eb04c0b7d5686e711fe05fed6ede8afc2b1a7cfcda47e51c28835";

// export default async function handler(req, res) {
//   await mongooseConnect;

//   const sig = req.headers["stripe-signature"];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       await buffer(req),
//       sig,
//       endpointSecret
//     );
//   } catch (err) {
//     res.status(400).send(`Webhook Error: ${err.message}`);
//     return;
//   }

//   // Handle the event

//   // Handle the event
//   switch (event.type) {
//     case "checkout.session.completed":
//       const data = event.data.object;
//       // Then define and call a function to handle the event payment_intent.succeeded
//       const orderId = data.metadata.orderId;
//       const paid = data.payment_status === "paid";
//       if (orderId && paid) {
//         await Order.findByIdAndUpdate(orderId, { paid: true });
//       }
//       break;
//     // ... handle other event types
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }
//   // Return a 200 response to acknowledge receipt of the event
//   res.status(200).send("ok");
// }

// // to stop bodyparser the decode json and code request body
// export const config = {
//   api: { bodyParser: false },
// };
