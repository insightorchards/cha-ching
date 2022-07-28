const app = require("./server.js")
const express = require("express")
const port = 3001
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: path.join(__dirname, ".env") })
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get("/", (req, res) => {
  res.json({ test: "hello world!" })
})

app.get("/success", (req, res) => {
  res.send("Success!")
})

app.get("/payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
  })
  res.json({ clientSecret: paymentIntent.client_secret })
})

app.post("/payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",
  })
  // handle and return error if paymentIntents.create errors out or there's no req.body.amount
  res.json(paymentIntent)
})

app.get("/stripe-client-secret", async (req, res) => {
  const paymentIntentResponse = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
  })
  // console.log({ paymentIntentResponse }).catch((err) => res.json(err))
  res.json({ clientSecret: paymentIntentResponse.client_secret })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
