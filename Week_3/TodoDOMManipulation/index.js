let todoCtr = 1;

function deleteTodo(index) {
  const el = document.getElementById("todo-" + index);
  el.parentNode.removeChild(el);
}

function addTodo() {
  const todo = document.querySelector("input").value;

  const newTodo = document.createElement("div");
  newTodo.setAttribute("class", "newTodo");
  newTodo.setAttribute("id", "todo-" + todoCtr);
  newTodo.innerHTML =
    "<h3>" +
    todo +
    "</h3><button class='deleteTodo' onclick='deleteTodo(" +
    todoCtr +
    ")'>Delete</button>";

  const parentEl = document.getElementById("Todo-container");
  parentEl.appendChild(newTodo);
  document.querySelector("input").value = "";
  todoCtr++;
}
