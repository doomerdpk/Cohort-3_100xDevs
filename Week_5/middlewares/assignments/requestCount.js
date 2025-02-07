// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
const express = require("express");
const app = express();

let reqCount = 0;

function reqCounterMiddleware(req, res, next) {
  reqCount++;
  next();
}

app.get("/request-count", function (req, res) {
  res.send("Total Number of requests:" + reqCount);
});

app.use(reqCounterMiddleware);

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
