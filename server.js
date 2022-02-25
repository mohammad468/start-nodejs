const express = require("express");
const app = express();
const port = 3000;

const students = [
  { id: 1, userName: "mohammad", age: 20 },
  { id: 2, userName: "ali", age: 19 },
  { id: 3, userName: "hossein", age: 19 },
  { id: 4, userName: "amir", age: 17 },
  { id: 5, userName: "nikzad", age: 19 },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/students", (req, res) => {
  res.send(students);
});

app.get("/students/:id", (req, res) => {
  const student = students.find((item) => item.id == req.params.id);
  if (student) {
    res.send(student);
  } else {
    res.send("not found");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
