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
  let errorStatusCode

  const paymentIntentResult = await stripe.paymentIntents
    .create({
      amount: req.body.amount,
      currency: "usd",
    })
    .catch((err) => {
      errorStatusCode = err.statusCode
      errorMessage = err.raw.message
      return { error: errorMessage, statusCode: errorStatusCode }
    })

  const response = paymentIntentResult.errorCode
    ? { error: paymentIntentResult.error }
    : { ...paymentIntentResult }

  res.statusCode = errorStatusCode || 200
  res.json(response)
})

app.get("/stripe-client-secret", async (req, res) => {
  let errorStatusCode

  const paymentIntentResponse = await stripe.paymentIntents
    .create({
      amount: 1000,
      currency: "usd",
    })
    .catch((err) => {
      errorCode = err.statusCode
      const errorMessage = err.raw.message
      return { error: errorMessage, errorStatusCode }
    })

  const result = paymentIntentResponse.errorCode
    ? { error: paymentIntentResponse.error, statusCode: errorStatusCode }
    : { clientSecret: paymentIntentResponse.client_secret }

  res.statusCode = errorStatusCode || 200
  res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
