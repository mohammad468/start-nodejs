const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ?my middleWares
app.use((req, res, next) => {
  console.log("hello middleware");
  next();
});

let students = [
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
    res.status(404).send("not found");
  }
});

app.post("/students/:id", function (req, res) {
  if (!req.body.userName || req.body.userName < 1) {
    return res.status(400).send({
      success: false,
      message: "check the user name",
    });
  }

  if (!req.body.age || req.body.age < 1) {
    return res.status(400).send({
      success: false,
      message: "check the age",
    });
  }

  const student = {
    id: students[students.length - 1].id + 1,
    userName: req.body.userName,
    age: req.body.age,
  };
  students.push(student);
  res.send(student);
});

app.delete("/students/:studentId", function (req, res) {
  const index = students.findIndex((item) => item.id == req.params.studentId);
  if (index === -1) {
    return res.status(404).send({
      message: "student not found",
    });
  } else {
    students = [...students.slice(0, index), ...students.slice(index + 1)];
    res.status(200).send({
      message: "student is deleted",
    });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
