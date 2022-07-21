const app = require("./server.js");
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
