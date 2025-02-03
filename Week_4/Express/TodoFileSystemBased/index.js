const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

const todosPath = path.join(__dirname, "todos.json");

//Condition to check if file stroing todos doesn't exist
if (!fs.existsSync(todosPath)) {
  fs.writeFileSync(todosPath, "[]", "utf-8");
  console.log("File created successfully!");
}

//Middleware to Parse JSON Bodies
app.use(express.json());

//Helpers functions to read from and write to a file to avoid repitition
function readTodos(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else if (data == "" || !Array.isArray(JSON.parse(data))) {
        fs.writeFileSync(todosPath, "[]", "utf-8");
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeTodos(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

app.get("/", function (req, res) {
  res.status(200).send("To Do Application (File System Based)");
});

//Endpint to view all the undeleted todos
app.get("/view-todos", async function (req, res) {
  try {
    const data = await readTodos(todosPath);
    const todos = JSON.parse(data);
    if (todos.length === 0) {
      res.status(200).json({
        message: "Empty to do list!",
      });
    } else {
      res.status(200).json({
        message: todos,
      });
    }
  } catch (err) {
    res.status(404).json({
      error: "Error fetching todos!",
    });
  }
});

//Endpoint to create a new todo
app.post("/create-todo", async function (req, res) {
  try {
    if (!req.body.title || !req.body.id) {
      res.status(404).json({
        error: "Please provide a title and an id to create a new todo!",
      });
      return;
    }
    const data = await readTodos(todosPath);
    const todos = JSON.parse(data);

    const todoId = parseInt(req.body.id);

    if (todoId) {
      const isAlreadyPresent = todos.find((todo) => todo.id === todoId);
      if (isAlreadyPresent) {
        res.status(409).json({
          error: "Todo with this id already exists!",
        });
        return;
      }
    } else {
      res.status(404).json({
        error: "Please provide a valid id",
      });
      return;
    }

    todos.push(req.body);
    const jsonData = JSON.stringify(todos, null, 2);
    await writeTodos(todosPath, jsonData);
    res.status(200).json({
      message: "Successfully created a new todo!",
    });
  } catch (err) {
    res.status(404).json({
      error: "Error creating todo!",
    });
  }
});

//Endpoint to update an existing todo
app.put("/update-todo/:id", async function (req, res) {
  try {
    if (!req.body.title) {
      res.status(404).json({
        error: "Please provide the new title to update!",
      });
      return;
    }
    const data = await readTodos(todosPath);
    const todos = JSON.parse(data);
    const todoId = parseInt(req.params.id);

    if (todoId) {
      const req_todo = todos.find((todo) => todo.id === todoId);

      if (req_todo) {
        req_todo.title = req.body.title;
        const jsonData = JSON.stringify(todos, null, 2);
        await writeTodos(todosPath, jsonData);
        res.status(200).json({
          message: "Successfully updated the todo!",
        });
      } else {
        res.status(404).json({
          error: "Todo with provided id doesn't exist!",
        });
      }
    } else {
      res.status(404).json({
        error: "Please provide a valid id!",
      });
    }
  } catch (err) {
    res.status(404).json({
      error: "Error updating todo!",
    });
  }
});

//Endpoint to delete an existing todo
app.delete("/delete-todo/:id", async function (req, res) {
  try {
    const data = await readTodos(todosPath);
    const todos = JSON.parse(data);
    const todoId = parseInt(req.params.id);

    if (todoId) {
      const req_todo_index = todos.findIndex((todo) => todo.id === todoId);
      if (req_todo_index < 0) {
        res.status(404).json({
          error: "Todo with provided id doesn't exist!",
        });
        return;
      }
      todos.splice(req_todo_index, 1);
      const jsonData = JSON.stringify(todos, null, 2);
      await writeTodos(todosPath, jsonData);
      res.status(404).json({
        message: "Successfully Deleted the todo!",
      });
    } else {
      res.status(404).json("Please provide a valid id!");
    }
  } catch (err) {
    res.status(200).json({
      error: "Error deleting todo!",
    });
  }
});

app.listen(3000, function () {
  console.log("Application is running on port 3000");
});
