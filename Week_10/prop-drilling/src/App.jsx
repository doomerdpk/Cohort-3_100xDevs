//Use case: Simulate Prop-Drilling
//Scenerio:
//1. App variable should render Counter component.
//2. Counter variable should render three components - count, increaseCount, decreaseCount
//3. Define the state variable in App component and pass it to the above 3 componenets using props.

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

function Counter({ count, setCount }) {
  //One thing to notice here is that Counter variable is not using the state.
  //It is just passing it to the child components.
  return (
    <>
      <Count count={count} />
      <IncreaseCount setCount={setCount} />
      <DecreaseCount setCount={setCount} />
    </>
  );
}

function Count({ count }) {
  return <div>{count}</div>;
}

function IncreaseCount({ setCount }) {
  return (
    <button
      onClick={() => {
        setCount((c) => c + 1);
      }}
    >
      Increase
    </button>
  );
}

function DecreaseCount({ setCount }) {
  return (
    <button
      onClick={() => {
        setCount((c) => c - 1);
      }}
    >
      Decrease
    </button>
  );
}

export default App;
