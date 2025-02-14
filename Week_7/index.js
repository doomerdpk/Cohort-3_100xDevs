const express = require("express");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Auth = require("./Auth");
const bcrypt = require("bcrypt");
const { z } = require("zod");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    //Defining Format using zod
    const requiredBody = z.object({
      email: z.string().min(3).max(100).email(),
      name: z.string().min(3).max(100),
      password: z
        .string()
        .min(3)
        .max(30)
        .refine((password) => {
          return (
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[\W_]/.test(password) // At least one special character
          );
        }),
    });

    //Validating the body against above mentioned format
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
      res.status(400).json({
        error: parsedDataWithSuccess.error,
      });
      return;
    }
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "You have successfully signed up!",
    });
  } catch (error) {
    console.error("Error Occured:", error);
    res.status(500).json({
      error: "Error while signing up!",
    });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
      email,
    });

    if (!user) {
      res.status(400).json({
        error: "Invalid Credientials!",
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch);
    if (user && passwordMatch) {
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
  } catch (error) {
    console.error("Error Occured:", error);
    res.status(500).json({
      error: "Error while signing in",
    });
  }
});

app.use(Auth);

app.post("/todo", async (req, res) => {
  try {
    const title = req.body.title;
    await TodoModel.create({
      title: title,
      userId: req.id,
      done: false,
    });

    res.status(200).json({
      message: "Todo Created Successfully....",
    });
  } catch (error) {
    console.error("error occured:", error);
    res.status(500).json({
      error: "Error while creating todo!",
    });
  }
});

app.get("/todos", async (req, res) => {
  try {
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
  } catch (error) {
    console.error("Error occured:", error);
    res.status(500).json({
      error: "Error while Fetching todos..!",
    });
  }
});

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Successfully connected to the database...");
  } catch (error) {
    console.error("Error occured:", error);
  }
}

app.listen(3000, async () => {
  await connectToDB();
  console.log("Application is running at http://localhost:3000");
});
