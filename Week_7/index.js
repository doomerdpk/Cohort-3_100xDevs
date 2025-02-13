const express = require("express");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Auth = require("./Auth");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  await UserModel.create({
    name,
    email,
    password,
  });

  res.status(200).json({
    message: "You have successfully signed up!",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      message: token,
    });
  } else {
    res.status(400).json({
      error: "Invalid Credentials!",
    });
  }
});

app.use(Auth);

app.post("/todo", async (req, res) => {
  const title = req.body.title;
  await TodoModel.create({
    title: title,
    userId: req.id,
    done: false,
  });

  res.status(200).json({
    message: "Todo Created Successfully....",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await TodoModel.find({
    userId: req.id,
  });

  if (todos.length === 0) {
    res.status(200).json({
      message: "Empty list!",
    });
  } else {
    res.status(200).json({
      message: todos,
    });
  }
});

async function connectToDB() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("Successfully connected to the database...");
}

app.listen(3000, async () => {
  await connectToDB();
  console.log("Application is running at http://localhost:3000");
});
