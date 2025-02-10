const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "Deepak@123456";

app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let user = users.find((user) => user.username === username);

  if (!user) {
    users.push({
      username,
      password,
    });
    res.status(200).json({
      message: "You are Successfully signed up!",
    });
  } else {
    res.status(400).json({
      error:
        "User with this username already exists.. Please choose a different username!",
    });
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );

    res.status(200).json({
      message: token,
    });
  } else {
    res.status(400).json({
      error: "Invalid Credientials!",
    });
  }
});

function AuthMiddleware(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  req.username = decodedData.username;
  next();
}

app.get("/me", AuthMiddleware, (req, res) => {
  const user = users.find((user) => user.username === req.username);

  res.status(200).json({
    username: user.username,
    password: user.password,
  });
});

app.listen(3000, () => {
  console.log("Application is running at http://localhost:3000");
});
