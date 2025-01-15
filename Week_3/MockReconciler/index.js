//State for the Todo App: Todos variable storing all the undeleted todos.
//Component for the Todo App: Structure and Styles applied to any newly created todo.

//Initialize a global empty todo array(state variable) to store all the todos.

let todos = [];
let todoId = 1;

//function to add a new Todo

function AddTodo() {
  const todo = document.querySelector("input").value;
  if (todo === "") {
    alert("Can't add empty Todo!");
    return;
  }
  todos.push({
    title: todo,
    id: todoId,
  });
  todoId++;
  document.querySelector("input").value = "";
  Render(todos);
}

//function to delete a specific todo

function DeleteTodo(index) {
  let req_index = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === index) {
      req_index = i;
      break;
    }
  }
  todos.splice(req_index, 1);
  Render(todos);
}

//Defining the component
//It will take a specific todo. Apply the structures and styles to it and return the element to the render function to
//render it finally on screen

function todoComponent(todo) {
  const newTodo = document.createElement("div");
  const title = document.createElement("h3");
  const delbtn = document.createElement("button");

  title.innerHTML = todo.title;
  delbtn.innerHTML = "Delete";
  delbtn.setAttribute("onclick", "DeleteTodo(" + todo.id + ")");

  newTodo.appendChild(title);
  newTodo.appendChild(delbtn);
  newTodo.setAttribute("id", todo.id);
  newTodo.style.display = "flex";
  newTodo.style.justifyContent = "space-between";
  newTodo.style.alignItems = "center";

  return newTodo;
}

//Render function will take the state variable put it into the component and render the final thing on the screen
function Render(todos) {
  document.getElementById("Todo-container").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const newTodoEl = todoComponent(todos[i]);
    document.getElementById("Todo-container").appendChild(newTodoEl);
  }
}

//Note: Our Render Function is unoptimal. Libraries like React and Vue Optimize the DOM manipulation using batch updates which
//in turn enhances the performance of the application.
