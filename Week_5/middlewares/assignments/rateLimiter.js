//Create a rate limiter middleware function which allows only 5 requests in 10 seconds.
//If more request is being sent, those requests should be blocked.

const express = require("express");
const app = express();

let reqCount = 0;
let startTime = Date.now();

function rateLimiterMiddleware(req, res, next) {
  const now = Date.now();
  const timeElapsed = (now - startTime) / 1000;

  if (timeElapsed > 10) {
    reqCount = 1;
    startTime = now;
  } else {
    if (reqCount >= 5) {
      res.send("Too many requests. Try again later.");
      return;
    }
    reqCount++;
  }

  next();
}

app.use(rateLimiterMiddleware);

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
