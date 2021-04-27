const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_0C1x1Pb0p9pDysIY8bjT22M6002bbNpf8E");

//Setuping up the API

// -App Co fig
const app = express();

// -Midlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("Hello to me!!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, //subunits/cents of the currency
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

//Exampley endpoint


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
