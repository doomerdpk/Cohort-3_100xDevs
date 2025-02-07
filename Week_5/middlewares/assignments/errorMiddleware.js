//Create a error middleware by incorporating below conditions:
//1. Ensure that if there is ever an exception, the end user sees a status code of 404. (Express by default sends 500 status code if there is an exception)
//2. Maintain the errorcount variable whose value should go up every time there is an exception in any endpoint.
//Note: Error handling middleware is defined at the end of file.

const express = require("express");
const app = express();

let errorCount = 0;

app.get("/error-endpoint", function (req, res) {
  throw new Error();
});

function errorMiddleware(err, req, res, next) {
  errorCount++;
  console.log(errorCount);
  res.status(400).send("Unexpected Error Occured...");
}

app.use(errorMiddleware);

app.listen(3000, function (req, res) {
  console.log("Application is running at http://localhost:3000");
});
