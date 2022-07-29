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
  const paymentIntentResponse = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
  })
  res.json({ clientSecret: paymentIntentResponse.client_secret })
})

app.post("/payment-intent", async (req, res, next) => {
  let statusCode = 200
  let response
  // if (typeof req.body !== "object") {
  //   console.log("yo this thing was not an object!")
  //   response = "some error"
  // }
  const paymentIntentResponse = await stripe.paymentIntents
    .create({
      amount: req.body.amount,
      currency: "usd",
    })
    .catch((err) => {
      console.log("status code:", err.statusCode)
      console.log("error message:", err.raw.message)
      statusCode = err.statusCode
      response = err.raw.message
      return err
    })
  res.statusCode = 400
  res.json(paymentIntentResponse.raw.message)
  // res.json(paymentIntentResponse)
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
