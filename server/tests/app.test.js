const request = require("supertest")
const app = require("../app")

describe("app", () => {
  it("GET /", async () => {
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

  describe("POST /payment-intent", () => {
    it.todo("has status code of 200")
    it.todo("errors gracefully")
    it.todo("has a response with clientSecret in it")

    it.only("takes in amount and returns a stripe paymentIntent object", async () => {
      const response = await request(app)
        .post("/payment-intent")
        .send({ amount: 209 })

      expect(response.statusCode).toBe(200)
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )
      expect(response.body.client_secret).toBeDefined()
      expect(response.body).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          client_secret: expect.any(String),
          amount: 209,
          currency: "usd",
          payment_method_options: expect.objectContaining({
            card: expect.anything(),
          }),
        })
      )
    })
  })
})
