//Code Review: https://chatgpt.com/share/679fba52-9d60-8000-bfa8-28ef6998e508
const express = require("express");
const app = express();

let todos = [];
app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).send("In Memory Todo Application");
});

app.get("/view-todos", function (req, res) {
  if (todos.length == 0) {
    res.status(200).send("Currently there are no todos present!");
    return;
  }
  let todolist = "";
  todos.forEach((todo) => {
    todolist += "\n" + todo;
  });
  res.status(200).send(todolist);
});

app.post("/create-todo", function (req, res) {
  if (!req.body.title) {
    res.status(404).send("Please provide the title to create todo!");
    return;
  }
  const todoIndex = todos.findIndex((todo) => todo === req.body.title);
  if (todoIndex >= 0) {
    res.status(409).send("Todo with entered title already exist!");
    return;
  }

  todos.push(req.body.title);
  res.status(200).send("Todo created Successfully!");
});

app.put("/update-todo/:title", function (req, res) {
  const todoIndex = todos.findIndex((todo) => todo === req.params.title);

  if (todoIndex < 0) {
    res.status(404).send("Todo with entered title doesn't exist!");
    return;
  }
  if (!req.body.title) {
    res.status(404).send("Please provide the title to update the todo!");
    return;
  }
  todos[todoIndex] = req.body.title;
  res.status(200).send("Todo updated Successfully!");
});

app.delete("/delete-todo", function (req, res) {
  if (!req.body.title) {
    res.status(404).send("Please provide the title to delete todo!");
    return;
  }
  const todoIndex = todos.findIndex((todo) => todo === req.body.title);

  if (todoIndex < 0) {
    res.status(404).send("Todo with entered title doesn't exist!");
    return;
  }
  todos.splice(todoIndex, 1);
  res.status(200).send("Todo with entered title successfully deleted!");
});

app.listen(3000, function () {
  console.log("Application is running on port 3000");
});
