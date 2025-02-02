const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "Public")));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("application is running on port 3000");
});
