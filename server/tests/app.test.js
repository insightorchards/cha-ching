const supertest = require("supertest");
const assert = require("assert");
const app = require("../server");
const request = supertest(app);
// import { jest } from "@jest/globals";

describe("app", () => {
  it("sends a response from root", () => {
    request
      .get("/")
      .expect("Hello World!")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

// it("Gets the test endpoint", async (done) => {
//   // Sends GET Request to /test endpoint
//   const res = await request.get("/test");

//   // ...
//   done();
// });
