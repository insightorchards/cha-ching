const app = require("./server.js");
const port = 3001;
const express = require("express");
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);

// Might be useful in the future
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.send({
    msg: "Hello",
    user: {},
  });
});

app.get("/payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
  });
  res.send(paymentIntent);
});

app.post("/", (req, res) => {
  res.send("Palm Tree");
  console.log(req.body);
});

app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
