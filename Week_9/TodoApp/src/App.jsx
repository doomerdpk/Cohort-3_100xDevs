import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const title = document.getElementById("title").value;
    const id = document.getElementById("id").value;

    setTodos([...todos, { title, id }]);
    document.getElementById("title").value = "";
    document.getElementById("id").value = "";
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Todo Application</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2vw",
          alignItems: "center",
        }}
      >
        <div>
          <input type="text" id="title" placeholder="Enter title..." />
          <br />
          <input type="text" id="id" placeholder="Enter id..." />
          <br />
          <br />
          <button onClick={addTodo}>Add Todo</button>
        </div>

        <div>
          {todos.map((todo) => (
            <div>
              {todo.id}. {todo.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
