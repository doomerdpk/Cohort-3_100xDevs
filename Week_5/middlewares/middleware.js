const express = require("express");
const app = express();

//Defining a middleware
// app.use(function (req, res, next) {
//   console.log("request received");
//   next();
// });

// app.get("/sum", function (req, res) {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     ans: a + b,
//   });
// });

//Modifying the request object
// app.use(function (req, res, next) {
//   req.name = "harkirat";
//   next();
// });

// app.get("/sum", function (req, res) {
//   console.log(req.name);
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     ans: a + b,
//   });
// });

//Ending the Request-Response Cycle
// app.use(function (req, res, next) {
//   res.json({
//     message: "You are not allowed",
//   });
// });

// app.get("/sum", function (req, res) {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     ans: a + b,
//   });
// });

//Calling the next middleware function
app.use(function (req, res, next) {
  console.log("request received");
  next();
});

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000, function () {
  console.log("Application is running at http://localhost:3000");
});
