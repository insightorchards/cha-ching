const app = require("./server.js")
const express = require("express")
// const app = express()
const port = 3001
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: path.join(__dirname, ".env") })
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get("/", (req, res) => {
  res.json({ juice: "beatle juice" })
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

app.post("/", (req, res) => {
  res.json({ drink: "banana soda" })
  console.log("POST REQUEST BODY", req.body)
})

app.get("/test", async (req, res) => {
  res.json({ message: "pass!" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
