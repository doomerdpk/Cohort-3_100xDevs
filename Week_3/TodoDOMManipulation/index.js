let todoCtr = 1;

function deleteTodo(index) {
  const el = document.getElementById("todo-" + index);
  el.parentNode.removeChild(el);
}

function MarkDone(index) {
  const el = document.getElementById("todo-" + index);
  el.style.textDecoration = "line-through";
}

function EditTodo(index) {
  const el = document.getElementById("todo-" + index);
  const h3El = el.querySelector("h3");
  h3El.contentEditable = true;
  h3El.focus();
}

function SaveTodo(index) {
  const el = document.getElementById("todo-" + index);
  const h3El = el.querySelector("h3");
  h3El.contentEditable = false;
}

function addTodo() {
  const todo = document.querySelector("input").value;

  if (todo === "") {
    alert("Can't add Empty Todo!");
    return;
  }

  const newTodo = document.createElement("div");
  newTodo.setAttribute("class", "newTodo");
  newTodo.setAttribute("id", "todo-" + todoCtr);
  newTodo.innerHTML =
    "<h3>" +
    todo +
    "</h3><div><button class='deleteTodo' onclick='deleteTodo(" +
    todoCtr +
    ")'>Delete</button><button class='markTodo' onclick='MarkDone(" +
    todoCtr +
    ")'>Mark as Done</button><button class='editTodo' onclick='EditTodo(" +
    todoCtr +
    ")'>Edit Todo</button><button class='saveTodo' onclick='SaveTodo(" +
    todoCtr +
    ")'>Save Todo</button></div>";

  const parentEl = document.getElementById("Todo-container");
  parentEl.appendChild(newTodo);
  document.querySelector("input").value = "";
  todoCtr++;
}
