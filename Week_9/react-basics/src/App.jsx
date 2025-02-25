import { useState, useEffect } from "react";

import Post from "./Components/PostComponentProps";
import PostState from "./Components/PostComponentUseState";
import ProfileCard from "./Components/ProfileCard";
import ToggleMessage from "./Components/ConditionalRendering";
import TopBar from "./Components/TopBar";
import Interval from "./Components/useEffect";
import Tabs from "./Components/Tabs";
import BuggyComponent from "./Components/ErrorBoundary";
import ClassCounter from "./Components/ClassBasedComponents";
import Card from "./Components/ChildrenProps";

// Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.
// Error boundaries only exist in class based components
// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.error("Error caught:", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }

function App() {
  // const [count, setCount] = useState(0);
  // const [isvisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const interval2 = setInterval(() => {
  //     setIsVisible((c) => !c);
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval2);
  //   };
  // }, []);
  return (
    <>
      {/* Rendering Post Components by passing props */}
      {/* <Post
        imageUrl={"https://cdn-icons-png.flaticon.com/512/9203/9203764.png"}
        title={"Deepak Kumar"}
        subtitle={"Software Engineer"}
        time={"3d"}
        body={"Want to Learn, Join this course and get a new Job"}
      ></Post>
      <Post
        imageUrl={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEUAd7f///8AbLIAcrX4/P1qnsrX6POzzeIAbrO81ecAdbYAcLREjsKgwNuOuNi50OXl7vXG2OqEr9Mjg70wf7sAabEAZa9Vl8fs9PlDicB+qtDK3eymxt+XvNqEs9WxyOBxps5ll8Z5oszQSjq+AAAERUlEQVR4nO2c3XqiMBCG84MSEgQUKALSau//IhdrVYRMjKVlss+T72QPFuLbZDKZmYQQ+q1su6tygqa82m2zKwu5/BMkhRIcj4kQLkSRBEOolAlMoKsES+9QHZfYPBdJnlyhkjdsmLvekgtUimpLY/H0DBUwR8buIsmCHipxwsbvEgklWYFNMVaRka3ChhhLbcnOsdHrx29HKqfm3lm8IojrHSQHkf5PSSUUV0o5ZHeijJuPMEo/uoo54vZVkdyiLro/1AofS74NkL7CwAP6IKp6TcfaV7jOX9X7CVPfWSuGyMRjHVNP1eCtSVJkWqaeKkezK54CTJSu0ZiqAISi70jG/jadeIMBxPGisjAwUbpC6Sq1MUK1KFBya4TCiekLyB98G9UJwahkbZh7Zx0RXJWMn0A1LkKh9JSLw+emoZPWCJXlGC5dHIxQOM6Tx0aoHc6KbFyQqcDJH/jKwNRhxZ4yApnWaNUsWYCuCjGhUVDs+Y5ZzFKVlinBTfxErElGj0gz7yZOwhFTGztQiGR5OChwbGM36i6S5Z9du16v282xxt3iGkpywcpewpUNJS8vcrZLJYQ4F3OVYDONk3+19aBxeVGqySOjH+2BWB7vwjT6msRRmFR538xPwdhpk451+HxYZXjdTR4Ju+JOzlndhJPqWxY2xc9cnmq0K/JhQMUrbbUvi79/kIs40tcDe676BwuWhKKEeyIqCZD0ZOXXf5eVMf+I6pfLp6ID2mpvTcGVtXO2I2X3JHvcd6/W5dl4Mb5qfYdaQb8ac8ILY5h/UVS8tnLNhOKxOZ/9VvYa1TwofRF+NtUsqPpJ3j9s7hWXNa+nzJXAB6ULQQXQu1o19p5hVk+9pIBY99VyUDS0tvUFoYLatqsWhKJh6SAUdbGnrNPuRaFaaddXi0LZmvqiUPRoN36/B2XzUGQ3/34Hah82n6fT53v7LN5bDqpdlWWfuPQJTVm+m+MGO6P6BaiNvFuKVIUxcrDbWJkNFRzLxwSwNO0YbKwKX7OhJg5RckPUnlpNv7lQ6dR0uSFGbq3il5lQe53lMngA18UCUFobkTn8RywAFeg33ziYMtstNPOgAA+tEugFO0c1DwpYy/gJ3lz5cyitmZOzUYHzz+pU7iwocIIzcLGxcumzoELIP5eg/2xsvOcsKPDQfQmeFbM6lDULagWNBew+/x4qBqHAM1BOQlklNItD2cQuHspDeSgP5aE8lIfyUB7KQ3koD+WhPJSH8lAeykN5KA/1Qyj4SOXtbRgK/ICMQa3aVYfBDw+HWwPGw6f6VgGmAOzcB3H9Nlg6OJai9B9H7Q2bP9DHxBvLg11l9RGNFTYPB5FVPX0k+jB+kV+u0ukr6cr2BBXhio8lRiMvp4/wJ2dvNa1y9Asr/ms5eAdO7uYFRk5e9eTkpVhOXh/m5EVrbl5J5+TlfZR2Dl5z6OaFkG5enenmJaPUretY/wGix1WoDbzkEwAAAABJRU5ErkJggg=="
        }
        title={"Linkedin"}
        subtitle={"Promoted"}
        body={
          "Find a job at a company that needs your help and get updates on new jobs as they come up"
        }
      ></Post> */}
      {/* Rendering Post Components by passing state variable */}
      {/* <PostState></PostState> */}
      {/* Rendering Profile Card Component */}
      {/* <ProfileCard></ProfileCard> */}
      {/* Conditional Rendering */}
      {/* <ToggleMessage></ToggleMessage> */}
      {/* Linkedin TopBar */}
      {/* <TopBar></TopBar> */}
      {/* Testing setTimeOut and SetInterval inside useEffect */}
      {/* <Interval></Interval> */}
      {/* Tab Changing Logic */}
      {/* <Tabs></Tabs> */}
      {/* Simulating Cleanup logic in useEffects */}
      {/* {isvisible && <Effect count={count} setCount={setCount}></Effect>} */}
      {/* Simulating Error Boundary  */}
      {/* 
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary> */}
      {/* Testing Class Based Components */}
      {/* <ClassCounter></ClassCounter> */}
      {/* Simulating Children Props */}
      <div>
        <Card>
          <h2>Card Title</h2>
          <p>This is some content inside the card.</p>
        </Card>
        <Card>
          <h2>Another Card</h2>
          <p>This card has different content!</p>
        </Card>
      </div>
    </>
  );
}

export default App;

//Whatever you write in useEffect() is independent of components lifecycle (mounting, re-rendering,unmounting) so whenever the component unmounts
//the effect is still running and need a cleanup logic to be removed.

// function Effect({ count, setCount }) {
//   useEffect(() => {
//     const interval1 = setInterval(() => {
//       console.log("Interval function called!");
//       setCount((c) => c + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval1);
//     };
//   }, []);

//   return <div>{count}</div>;
// }
