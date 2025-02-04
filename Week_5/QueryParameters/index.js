const express = require("express");
const app = express();

function doOperation(req, res, operation) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({
      error: "Please provide valid numbers for the operation.",
    });
    return;
  }

  if (operation === "divide" && b === 0) {
    res.status(400).json({ error: "Division by zero is not allowed." });
    return;
  }

  const operations = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };

  res.status(200).json({
    message: operations[operation],
  });
}

app.get("/add", function (req, res) {
  doOperation(req, res, "add");
});

app.get("/subtract", function (req, res) {
  doOperation(req, res, "subtract");
});

app.get("/multiply", function (req, res) {
  doOperation(req, res, "multiply");
});

app.get("/divide", function (req, res) {
  doOperation(req, res, "divide");
});

app.listen(3000, function (req, res) {
  console.log("Application is running at http://localhost:3000");
});
