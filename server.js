const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/students", (req, res) => {
  res.send([
    { id: 1, userName: "mohammad", age: 20 },
    { id: 2, userName: "ali", age: 19 },
    { id: 3, userName: "hossein", age: 19 },
    { id: 4, userName: "amir", age: 17 },
    { id: 5, userName: "nikzad", age: 19 },
  ]);
});

app.get("/students/:userName", (req, res) => {
  res.send(req.params);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
