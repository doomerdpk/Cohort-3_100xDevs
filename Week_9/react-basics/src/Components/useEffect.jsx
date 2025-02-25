import { useEffect, useState } from "react";

export default function Interval() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCount((c) => c + 1);
  //     }, 5000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  setTimeout(() => {
    console.log("setTimeout called");
    setCount((c) => c + 1);
  }, 5000);

  return <div>{count}</div>;
}
