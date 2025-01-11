//SetTimeout - Traditional Callback version

function callback() {
  console.log("I am called after 5 seconds");
}

setTimeout(callback, 5000);

//SetTimeout - Promisified Version

function setTimeoutPromisified(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

setTimeoutPromisified(5000).then(callback);

//Comaparison - Callback approach vs Promisified Approach

// 1. Both are almost used for the same thing and results in same output.
// 2. Promisified version is used for cleaner code and better readibility.
// 3. If a choice then should use promisified approach

//Execution flow in promisified version
// Calling promisified function along with delay returns an object of Promise
// class which takes a function as a parameter. Assume that the function is a
// function named A. Whenever the first a parameter of function A (which is
// also a function and generally named as resolve) gets called then it
// indicates the resolution of promise and using (.then()) callback function
// is called. Promisified version use normal callback version only in its
// definition but looks way more cleaner and readable if we have to perform
// multiple asynchronous operations one after the other.
