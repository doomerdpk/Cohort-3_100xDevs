//Requirements: Create a Todo Application using React with below functionalities.
//1. Able to create a new todo.
//2. Able to delete an existing todo.
//3. Able to view all the undeleted todos.

import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const titleRef = useRef();

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: titleRef.current.value,
      },
    ]);
    titleRef.current.value = "";
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: " #0984e3",
        color: "white",
      }}
    >
      <div>
        <h1>Stash it!</h1>
      </div>
      <div
        style={{
          padding: 30,
          fontSize: "large",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "1vh",
          overflowY: "auto",
        }}
      >
        {todos.map((todo, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5vw",
              justifyContent: "space-between",
            }}
          >
            <h3>{todo.title}</h3>
            <button
              onClick={() => {
                const newTodos = [...todos];
                newTodos.splice(index, 1);
                setTodos(newTodos);
              }}
              style={{
                border: "none",
                borderRadius: 4,
                color: "white",
                backgroundColor: "black",
                height: "2.5vw",
              }}
              type="button"
            >
              Delete Todo
            </button>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1vw" }}>
        <input
          style={{ boder: "none", borderRadius: 4, height: "2.5vw" }}
          ref={titleRef}
          type="text"
          placeholder="title..."
        />
        <button
          style={{
            boder: "none",
            borderRadius: 4,
            color: "white",
            backgroundColor: "black",
          }}
          type="button"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default App;
