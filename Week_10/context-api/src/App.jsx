//Use case: Simulate Context - API (Cleaner way)
//Scenerio:
//1. App variable should render Counter component.
//2. Counter variable should render three components - count, increaseCount, decreaseCount

import { useContext } from "react";
import { useState, createContext } from "react";

//Step 1: Creating the context
const countContext = createContext();

//Step 2: Create the provider to store the values
function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </countContext.Provider>
  );
}

function App() {
  return (
    <>
      <CountProvider>
        <Counter />
      </CountProvider>
    </>
  );
}

function Counter() {
  return (
    <>
      <Count />
      <IncreaseCount />
      <DecreaseCount />
    </>
  );
}

function Count() {
  //Step3: Consume the created context
  const { count } = useContext(countContext);

  return <div>{count}</div>;
}

function IncreaseCount() {
  //Step3: Consume the created context
  const { setCount } = useContext(countContext);
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

function DecreaseCount() {
  //Step3: Consume the created context
  const { setCount } = useContext(countContext);
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
