const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const usersDataPath = path.join(__dirname, "/data");
const userDataPath = path.join(__dirname, "/data/userData");
const usersPath = path.join(__dirname, "/data/users.json");

if (!fs.existsSync(usersDataPath)) {
  fs.mkdirSync(usersDataPath, { recursive: true });
  console.log("data folder created successfully...");
}

if (!fs.existsSync(userDataPath)) {
  fs.mkdirSync(userDataPath, { recursive: true });
  console.log("userData folder created successfully...");
}

if (!fs.existsSync(usersPath)) {
  fs.writeFileSync(usersPath, "[]", "utf-8");
  console.log("Users file created successfully..");
}

app.use(express.json());

function readFile(filepath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFile(filepath, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(filepath, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

app.get("/", function (req, res) {
  res.status(200).send("Multi User Todo!");
});

//Endpoint to create an user
app.post("/create-user", async function (req, res) {
  try {
    if (
      !req.body.userName ||
      !req.body.Email ||
      typeof req.body.userName != "string" ||
      typeof req.body.Email != "string"
    ) {
      res.status(400).json({
        error: "Please provide valid credentails for signup!",
      });
      return;
    }

    const data = await readFile(usersPath);
    const users = JSON.parse(data);

    const userIndex = users.findIndex(
      (user) =>
        user.userName === req.body.userName || user.Email === req.body.Email
    );

    if (userIndex < 0) {
      users.push({ userName: req.body.userName, Email: req.body.Email });

      const usersData = JSON.stringify(users, null, 2);
      await writeFile(usersPath, usersData);

      const userPath = path.join(
        __dirname,
        "/data/userData/" + req.body.userName + ".json"
      );
      await writeFile(userPath, "[]", "utf-8");
      res.status(200).json({
        message: "You are successfully signed up!",
      });
    } else {
      res.status(400).json({
        error: "User with provided credentials already exists!",
      });
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({
      error: "Error Signing Up!",
    });
  }
});

//Endpoint to view all the users
app.get("/view-users", async function (req, res) {
  try {
    const data = await readFile(usersPath);
    const users = JSON.parse(data);

    if (users.length === 0) {
      res.status(200).json({
        message: "Empty list of users!",
      });
      return;
    }

    res.status(200).json({
      message: users,
    });
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({
      error: "Error fetching users!",
    });
  }
});

//Endpoint to view all the undeleted todos for a user
app.get("/view-todos/:user", async function (req, res) {
  try {
    const usersData = await readFile(usersPath);
    const users = JSON.parse(usersData);

    const userIndex = users.findIndex(
      (user) => user.userName === req.params.user
    );

    if (userIndex < 0) {
      res.status(400).json({
        error: "Provided user does not exist!",
      });
      return;
    }

    const userPath = path.join(
      __dirname,
      "/data/userData/" + req.params.user + ".json"
    );

    const data = await readFile(userPath);
    const todos = JSON.parse(data);

    if (todos.length === 0) {
      res.status(200).json({
        message: "Empty list of todos!",
      });
      return;
    }

    res.status(200).json({
      message: todos,
    });
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({
      error: "Error Fetching todos!",
    });
  }
});

//Endpoint to create todo for a specific user
app.post("/create-todo/:user", async function (req, res) {
  try {
    const usersData = await readFile(usersPath);
    const users = JSON.parse(usersData);

    const userIndex = users.findIndex(
      (user) => user.userName === req.params.user
    );

    if (userIndex < 0) {
      res.status(400).json({
        error: "Provided user does not exist!",
      });
      return;
    }

    const todoId = parseInt(req.body.id);
    if (
      !req.body.title ||
      !req.body.id ||
      typeof req.body.title != "string" ||
      isNaN(todoId)
    ) {
      res.status(400).json({
        error: "Please provide a valid title and an valid id to create a todo!",
      });
      return;
    }

    const userPath = path.join(
      __dirname,
      "/data/userData/" + req.params.user + ".json"
    );

    const data = await readFile(userPath);

    const todos = JSON.parse(data);

    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
      todos.push({ title: req.body.title, id: req.body.id });

      const todosData = JSON.stringify(todos, null, 2);
      await writeFile(userPath, todosData);
      res.status(200).json({
        message: "Todo Created Successfully!",
      });
    } else {
      res.status(400).json({
        error:
          "Todo with provided id already exists!.. Please select another id",
      });
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({
      error: "Error creating Todo!",
    });
  }
});

//Endpoint to update a todo for a specific user
app.put("/update-todo/:user/:id", async function (req, res) {
  try {
    const usersData = await readFile(usersPath);
    const users = JSON.parse(usersData);

    const userIndex = users.findIndex(
      (user) => user.userName === req.params.user
    );

    if (userIndex < 0) {
      res.status(400).json({
        error: "Provided user does not exist!",
      });
      return;
    }

    const todoId = parseInt(req.params.id);
    if (!req.body.title || isNaN(todoId) || typeof req.body.title != "string") {
      res.status(400).json({
        error:
          "Please provide a valid id and a valid title to update the todo!",
      });
      return;
    }

    const userPath = path.join(
      __dirname,
      "/data/userData/" + req.params.user + ".json"
    );

    const data = await readFile(userPath);

    const todos = JSON.parse(data);

    const todo = todos.find((todo) => todo.id === todoId);

    if (todo) {
      todo.title = req.body.title;
      const todosData = JSON.stringify(todos, null, 2);
      await writeFile(userPath, todosData);
      res.status(200).json({
        message: "Todo updated Successfully!",
      });
    } else {
      res.status(400).json({
        error: "Todo with provided id doesn't exist!",
      });
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({
      error: "Error Updating Todo!",
    });
  }
});

//Endpoint to delete a todo for a specific user
app.delete("/delete-todo/:user/:id", async function (req, res) {
  try {
    const usersData = await readFile(usersPath);
    const users = JSON.parse(usersData);

    const userIndex = users.findIndex(
      (user) => user.userName === req.params.user
    );

    if (userIndex < 0) {
      res.status(400).json({
        error: "Provided user does not exist!",
      });
      return;
    }

    const todoId = parseInt(req.params.id);
    if (isNaN(todoId)) {
      res.status(400).json({
        error: "Please provide a valid id to delete the todo!",
      });
      return;
    }

    const userPath = path.join(
      __dirname,
      "/data/userData/" + req.params.user + ".json"
    );

    const data = await readFile(userPath);

    const todos = JSON.parse(data);

    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
      res.status(400).json({
        error: "Todo with provided id doesn't exist",
      });
      return;
    } else {
      todos.splice(todoIndex, 1);
      const todosData = JSON.stringify(todos, null, 2);
      await writeFile(userPath, todosData);
      res.status(200).json({
        message: "Todo deleted Successfully!",
      });
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({
      error: "Error deleting todos!",
    });
  }
});

app.listen(3000, function (req, res) {
  console.log("Application is running at http://localhost:3000");
});
