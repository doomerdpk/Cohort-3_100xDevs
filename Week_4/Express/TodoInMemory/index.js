const express = require("express");
const app = express();

let todos = [];
app.use(express.json());

app.get("/", function (req, res) {
  res.send("In Memory Todo Application");
});

app.get("/view-todos", function (req, res) {
  if (todos.length == 0) {
    res.send("Currently there are no todos present in the list!");
    return;
  }
  let todolist = "";
  todos.forEach((todo) => {
    todolist += "\n" + todo;
  });
  res.send(todolist);
});

app.post("/create-todo", function (req, res) {
  const todoIndex = todos.findIndex((todo) => todo === req.body.title);
  if (todoIndex >= 0) {
    res.send("Todo with entered title already exist in the list!");
    return;
  }

  todos.push(req.body.title);
  res.send("Todo created Successfully!");
});

app.put("/update-todo/:title", function (req, res) {
  const todoIndex = todos.findIndex((todo) => todo === req.params.title);

  if (todoIndex < 0) {
    res.send("Todo with entered title doesn't exist in the list!");
    return;
  }

  todos[todoIndex] = req.body.title;
  res.send("Todo updated Successfully!");
});

app.delete("/delete-todo", function (req, res) {
  const todoIndex = todos.findIndex((todo) => todo === req.body.title);

  if (todoIndex < 0) {
    res.send("Todo with entered title doesn't exist in the list!");
    return;
  }
  todos.splice(todoIndex, 1);
  res.send("Todo with entered title successfully deleted from the list!");
});

app.listen(3000, function () {
  console.log("Application is running on port 3000");
});
