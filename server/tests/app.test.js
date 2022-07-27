const request = require("supertest")
const app = require("../app")
// console.log("app", app)
// const assert = require("assert")
// const request = supertest(app);
// import { jest } from "@jest/globals";

describe("app", () => {
  it("sends a response from root", () => {
    request(app)
      .get("/")
      .expect(200)
      .expect({ juice: "beatle juice" })
      .end(function (err, res) {
        if (err) throw err
      })
  })
})

describe.only("test", () => {
  it("is a test", async () => {
    const result = await await request(app).get("/")
    expect(result.statusCode).toBe(200)
    expect(result.body).toEqual(
      expect.objectContaining({
        juice: "beatle juice",
      })
    )
    // console.log(result)
  })
})
// it("Gets the test endpoint", async (done) => {
//   // Sends GET Request to /test endpoint
//   const res = await request.get("/test");

//   // ...
//   done();
// });
