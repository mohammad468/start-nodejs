const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/students", (req, res) => {
  res.send([
    { id: 1, name: "mohammad", age: 20 },
    { id: 2, name: "ali", age: 19 },
    { id: 3, name: "hossein", age: 19 },
    { id: 4, name: "amir", age: 17 },
    { id: 5, name: "nikzad", age: 19 },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
