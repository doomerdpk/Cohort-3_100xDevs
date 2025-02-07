// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require("express");
const app = express();

function loggerMiddleware(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  console.log(new Date());

  next();
}

app.use(loggerMiddleware);

app.get("/read", function (req, res) {
  res.send("Get Enpoint After Logger Middleware!");
});

app.post("/create", function (req, res) {
  res.send("Post Enpoint After Logger Middleware!");
});

app.put("/update", function (req, res) {
  res.send("Put Enpoint After Logger Middleware!");
});

app.delete("/delete", function (req, res) {
  res.send("Delete Enpoint After Logger Middleware!");
});

app.listen(3000, function () {
  console.log("Application is running on http://localhost:3000");
});
