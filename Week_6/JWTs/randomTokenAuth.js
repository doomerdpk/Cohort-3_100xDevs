const express = require("express");
const app = express();

app.use(express.json());

let users = [];

function generateToken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let token = "";
  //Below loop is generating a 32 character token
  for (let i = 0; i < 32; i++) {
    //Math.random() - generating a number between 0 and 1
    //Math.random() * options.length - generates a number between 0 and size of options array
    //Math.floor(Math.random() * options.length) - take the integer value of out of it which is used as index to get
    //a specific character of options array. This way we are taking a random chracter everytime.
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

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
    const token = generateToken();
    user.token = token;
    res.status(200).json({
      message: token,
    });
  } else {
    res.status(400).json({
      error: "Invalid username and password!",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.authorization;

  const user = users.find((user) => user.token === token);

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
