//Use case: Rolling up the state to Lowest common Ansector.
//Scenerio:
//1. App variable should render Counter component.
//2. Counter variable should render three components - count, increaseCount, decreaseCount

import { useState } from "react";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  //State variable will be defined here as this component
  //is the lowest common Ansector

  //Child components will re-render autometically when
  //parent component re-renders. So below three compoennt
  //will re-render autometically even when they are not
  //rendering the state variables.
  const [count, setCount] = useState(0);

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
