// Use Case:

// Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

//Callback approach 1: Can use only anonymous function
// setTimeout(function () {
//   console.log("Hi");
//   setTimeout(function () {
//     console.log("Hello");
//     setTimeout(function () {
//       console.log("Hi There");
//     }, 5000);
//   }, 3000);
// }, 1000);

//Callback Approach 2: cleaner approach

// function LogsHiThere() {
//   console.log("Hi There!");
// }

// function LogsHello() {
//   console.log("Hello");
//   setTimeout(LogsHiThere, 5000);
// }

// function LogsHi() {
//   console.log("Hi");
//   setTimeout(LogsHello, 3000);
// }

// setTimeout(LogsHi, 1000);

//Promisified Approach 1: using anonymous function only

function setTimeoutPromisified(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

// setTimeoutPromisified(1000).then(function () {
//   console.log("Hi");
//   setTimeoutPromisified(3000).then(function () {
//     console.log("Hello");
//     setTimeoutPromisified(5000).then(function () {
//       console.log("Hi There");
//     });
//   });
// });

//Promisified Approach 2: Cleaner Approach

// function logsHiThere() {
//   console.log("Hi There");
// }

// function logsHello() {
//   console.log("Hello");
//   setTimeoutPromisified(5000).then(logsHiThere);
// }

// function logsHi() {
//   console.log("Hi");
//   setTimeoutPromisified(3000).then(logsHello);
// }

// setTimeoutPromisified(1000).then(logsHi);

//Promisified Approach 3: Cleaner Approach using Promise chaining

// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("Hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("Hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("Hi There");
//   });

//Promisified Approach 4: Cleanest approach using Async Await

async function Greet() {
  await setTimeoutPromisified(1000);
  console.log("Hi");
  await setTimeoutPromisified(3000);
  console.log("Hello");
  await setTimeoutPromisified(5000);
  console.log("Hi There");
}

Greet();

//Conclusion:
// 1. Callback hell using traditional approach is debatable as it can be
//    overcome by not using anonymous functions.
// 2. Overcoming callback hell using promisified approach is also debatable
//    if using anonymous function
// 3. Async await is the cleanest syntax among all.
