//Use Case:
//1. useRef() to store the value of a DOM Element.
//Scenerio: Clicking on a button should focus on input box.
//2. useRef() to store value of a variable.
//Scenerio: Counter with start and stop functionality.

import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  // const [timer, setTimer] = useState(0);
  const timerRef = useRef();

  function startCount() {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    // setTimer(interval);
    timerRef.current = interval;
  }

  function stopCount() {
    //timer if declared in startCount() function is inaccessible here since it is scoped to that function only.
    //Case 1: Declare timer as global normal variable using let.This will not work as expected as timer variable will get reintialized
    //everytime the App Component Re-renders.
    //case 2: Declare timer as a state variable. This will trigger an extra re-render while changing the value of timer state variable.
    //Not rendering this state variable on the UI. Still triggering a re-render makes no sense.
    //case 3: Store the value of timer using useRef().Most Optimized way to do this.
    clearInterval(timerRef.current);
  }

  return (
    <>
      {count}
      <br />
      <br />
      <button onClick={startCount}>Start</button>
      <button onClick={stopCount}>Stop</button>
    </>
  );
}

export default App;
