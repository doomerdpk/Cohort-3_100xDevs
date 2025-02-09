const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "Deepak@iitbh18";

app.use(express.json());

let users = [];

app.post("/signup", function (req, res) {
  const userName = req.body.userName;
  const password = req.body.password;

  users.push({
    userName,
    password,
  });

  res.status(200).json({
    token: "You are successfully signed up!",
  });
});

app.post("/signin", function (req, res) {
  const userName = req.body.userName;
  const password = req.body.password;

  const user = users.find(
    (user) => user.userName === userName && user.password === password
  );

  if (user) {
    const token = jwt.sign(
      {
        userName: user.userName,
      },
      JWT_SECRET
    );
    res.status(200).json({
      token: token,
    });
  } else {
    res.status(400).json({
      error: "Invalid username and password!",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.authorization;
  const foundUser = jwt.verify(token, JWT_SECRET);

  const user = users.find((user) => user.userName === foundUser.userName);

  if (user) {
    res.status(200).json({
      userName: user.userName,
    });
  } else {
    res.status(400).json({
      error: "Invalid username and password!",
    });
  }
});

app.listen(3000, function () {
  console.log("Apllication is running on http://localhost:3000");
});
