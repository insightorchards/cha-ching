const request = require("supertest")
const app = require("../app")

describe("app", () => {
  describe("GET /", () => {
    it("successfully calls root", async () => {
      const response = await request(app).get("/")

      expect(response.statusCode).toBe(200)
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )
      expect(response.body).toEqual(
        expect.objectContaining({
          test: "hello world!",
        })
      )
    })
  })

  describe("GET /stripe-client-secret", () => {
    it("responds with a clientSecret", async () => {
      const response = await request(app).get("/stripe-client-secret")

      expect(response.body).toEqual(
        expect.objectContaining({
          clientSecret: expect.any(String),
        })
      )
    })

    it("has status code of 200 on success", async () => {
      const response = await request(app).get("/stripe-client-secret")

      expect(response.statusCode).toBe(200)
    })
  })

  describe("POST /payment-intent", () => {
    describe("gets called with the correct req.body", () => {
      //   let response
      //   beforeAll(async () => {
      //     response = await request(app)
      //       .post("/payment-intent")
      //       .send({ amount: 700 })
      //   })

      it("takes in object with amount and returns a stripe paymentIntent object", async () => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            client_secret: expect.any(String),
            amount: 700,
            currency: "usd",
            payment_method_options: expect.objectContaining({
              card: expect.anything(),
            }),
          })
        )
      })

      it("responds with json headers", async () => {
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        )
      })

      it("has status code of 200 when called correctly", async () => {
        expect(response.statusCode).toBe(200)
      })

      it("has a client_secret in the response", async () => {
        expect(response.body.client_secret).toBeDefined() // strengthen this test. . . assert it starts as a key with pi! and is a certain number of characters maybe
      })
    })

    describe("handles errors when called with incorrect req.body params", () => {
      // let response
      // beforeAll(() => {
      //   response = await request(app).post("/payment-intent")
      // })

      it.todo("recieves back res.body.error when req.body is not a json object")

      it.only("returns an response with error if req.body.amount is not an interger", async () => {
        const result = await request(app)
          .post("/payment-intent")
          .send({ amount: "" })
        // expect(result.statusCode).toBe(400)
        expect(result.statusCode).toBe(400)
        expect(result.body).toEqual("Invalid integer: ")
      })

      it("returns a status code of 400", () => {})
    })
  })
})
