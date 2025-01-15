let todoId = 1;

function DeleteTodo(index) {
  const el = document.getElementById(index);
  el.parentNode.removeChild(el);
}

function AddTodo() {
  const todo = document.querySelector("input").value;

  if (todo === "") {
    alert("Can't Add Empty Todo!");
    return;
  }

  const newTodo = document.createElement("div");
  const title = document.createElement("h3");
  const delbtn = document.createElement("button");

  title.innerHTML = todo;
  delbtn.innerHTML = "Delete";
  delbtn.setAttribute("onclick", "DeleteTodo(" + todoId + ")");

  newTodo.appendChild(title);
  newTodo.appendChild(delbtn);
  newTodo.setAttribute("id", todoId);
  newTodo.style.display = "flex";
  newTodo.style.justifyContent = "space-between";
  newTodo.style.alignItems = "center";

  const parentEl = document.getElementById("Todo-container");
  parentEl.appendChild(newTodo);

  document.querySelector("input").value = "";
  todoId++;
}
