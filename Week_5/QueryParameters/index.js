const express = require("express");
const app = express();

app.get("/add", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({
      error: "Please provide valid numbers for the operation.",
    });
    return;
  }

  res.status(200).json({
    message: a + b,
  });
});

app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({
      error: "Please provide valid numbers for the operation.",
    });
    return;
  }

  res.status(200).json({
    message: a - b,
  });
});

app.get("/multiply", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({
      error: "Please provide valid numbers for the operation.",
    });
    return;
  }

  res.status(200).json({
    message: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({
      eerror: "Please provide valid numbers for the operation.",
    });
    return;
  }

  if (b === 0) {
    res.status(400).json({ error: "Division by zero is not allowed." });
    return;
  }

  res.status(200).json({
    message: a / b,
  });
});

app.listen(3000, function (req, res) {
  console.log("Application is running at http://localhost:3000");
});
