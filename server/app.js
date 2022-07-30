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

app.get("/subscriptions", async (req, res) => {
  const product = await stripe.products.create({
    name: 'Jelly Bean',
  })

  const price = await stripe.prices.create({
    currency: 'usd',
    product: product.id,
    unit_amount: 2000,
    recurring: {
      interval: "month"
    }
  })

  const paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      number: '4242424242424242',
      exp_month: 7,
      exp_year: 2023,
      cvc: '314',
    },
  })

  const customer = await stripe.customers.create({
    email: "jojobob@example.com",
    name: "Jojo Bob",
    payment_method: paymentMethod.id
  });

  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [
      {price: price.id},
    ],
    default_payment_method: paymentMethod.id
  });

  res.json(subscription)
  console.log("subscription", subscription)
})

app.get("/payment-intent", async (req, res) => {
  const paymentIntentResult = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
  })
  res.json({ clientSecret: paymentIntentResult.client_secret })
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
    : {
        ...paymentIntentResult,
        clientSecret: paymentIntentResult.client_secret,
      }

  res.statusCode = errorStatusCode || 200
  res.json(response)
})

// how do I get enforce signature to take in enforceSignature(_signatureObject, req, res, next, errorStacker)
const enforceSignature = (req, res, next) => {
  console.log("WIP, continue investigation into error handling with middlewear")
  next()
  // // if(req.headers.type !== json) error handling call an errorStack() function or something
  // if (typeof req.body.amount !== "object") {
  //   throw new Error(
  //     "oops you didnt pass me an obj, Im allergic to anything else!"
  //   ) // throw or just run a response object!
  //   next()
  // }
  // if (typeof req.body.amount !== "integer") {
  //   throw new Error(
  //     "oops, Im gonna need an integer pal! Did you pass middleschool geometry ?"
  //   )
  //   // throw or just run a response object ?
  //   next()
  // }
}

app.get("/stripe-client-secret", enforceSignature, async (req, res) => {
  let errorStatusCode

  const paymentIntentResult = await stripe.paymentIntents
    .create({
      amount: 1000,
      currency: "usd",
    })
    .catch((err) => {
      errorCode = err.statusCode
      const errorMessage = err.raw.message
      return { error: errorMessage, errorStatusCode }
    })

  const result = paymentIntentResult.errorCode
    ? { error: paymentIntentResult.error, statusCode: errorStatusCode }
    : { clientSecret: paymentIntentResult.client_secret }

  res.statusCode = errorStatusCode || 200
  res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
