//Code Review: https://chatgpt.com/share/679f46e4-4fd0-8000-a6a2-a2a5ea132f97

const { Command } = require("commander");
const program = new Command();

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "todos.json");

function readTodos(filepath, callback) {
  fs.readFile(filepath, "utf-8", (err, data) => {
    if (err && err.code === "ENOENT") {
      console.log("File does not exist, creating a new one...");
      writeTodos(filepath, "[]"); // write an empty array to the file
    } else if (err) {
      console.error(`Error reading file ${filepath}:`, err);
      return;
    } else {
      callback(data);
    }
  });
}

function writeTodos(filepath, data) {
  fs.writeFile(filepath, data, (err) => {
    if (err) {
      console.error(`Error writing to file ${filepath}:`, err);
      return;
    } else {
      console.log("todos updated successfully!");
    }
  });
}

program
  .name("todo-application")
  .description("CLI to perform CRUD on todos")
  .version("1.0.0");

program
  .command("add-todo")
  .description("create a new todo")
  .argument("<string>", "title of the todo")
  .action((todo) => {
    readTodos(filepath, (data) => {
      try {
        //data is string representation of an array, calling JSON.parse() will turn it into an actual JavaScript array
        const todos = JSON.parse(data);
        const index = todos.findIndex((ex_todo) => ex_todo === todo);
        if (index > 0) {
          console.error("Todo with given title already exists!");
        } else {
          todos.push(todo);
          //converts a JavaScript object or array (todos) into a JSON string.
          //null: Specifies that no transformations are applied to the object
          //2: This specifies the number of spaces used for indentation, making the JSON string pretty-printed and easier to read.
          //final result: '[\n  "Buy groceries",\n  "Complete homework",\n  "Clean the house"\n]'
          const saveTodo = JSON.stringify(todos, null, 2);
          writeTodos(filepath, saveTodo);
        }
      } catch (err) {
        console.error("Invalid JSON in todos file,updating the file..");
        writeTodos(filepath, "[]");
      }
    });
  });

program
  .command("view-todos")
  .description("View all the undeleted todos")
  .action(() => {
    readTodos(filepath, (data) => {
      try {
        //data is string representation of an array, calling JSON.parse() will turn it into an actual JavaScript array
        const todos = JSON.parse(data);
        if (todos.length === 0) {
          console.log("No todos found.");
        } else {
          todos.forEach((todo) => console.log(todo));
        }
      } catch (err) {
        console.error("Invalid JSON in todos file,updating the file..");
        writeTodos(filepath, "[]");
      }
    });
  });

program
  .command("update-todo")
  .description("update an existing todo")
  .argument("<existing_todo>", "Existing title of the todo")
  .argument("<updated_todo>", "Updated title of the todo")
  .action((existing_todo, updated_todo) => {
    readTodos(filepath, (data) => {
      try {
        //data is string representation of an array, calling JSON.parse() will turn it into an actual JavaScript array
        const todos = JSON.parse(data);
        const index = todos.findIndex((todo) => todo === existing_todo);
        if (index < 0) {
          console.error("Todo with given title does not exist!");
        } else {
          todos[index] = updated_todo;
          const saveTodo = JSON.stringify(todos, null, 2);
          writeTodos(filepath, saveTodo);
        }
      } catch (err) {
        console.error("Invalid JSON in todos file,updating the file..");
        writeTodos(filepath, "[]");
      }
    });
  });

program
  .command("delete-todo")
  .description("delete an existing todo")
  .argument("<string>", "Existing title of the todo")
  .action((existing_todo) => {
    readTodos(filepath, (data) => {
      try {
        //data is string representation of an array, calling JSON.parse() will turn it into an actual JavaScript array
        const todos = JSON.parse(data);
        const index = todos.findIndex((todo) => todo === existing_todo);
        if (index < 0) {
          console.error("Todo with given title does not exist!");
        } else {
          todos.splice(index, 1);
          const saveTodo = JSON.stringify(todos, null, 2);
          writeTodos(filepath, saveTodo);
        }
      } catch (err) {
        console.error("Invalid JSON in todos file,updating the file..");
        writeTodos(filepath, "[]");
      }
    });
  });

program.parse();
