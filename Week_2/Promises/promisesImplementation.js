//Implementation of Promise Class
//Code Execution Explanation: https://chatgpt.com/share/67836564-f8ec-8000-8f1e-10afd6b65a4b

class PromiseImp {
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      this.resolve();
    });
  }

  then(callback) {
    this.resolve = callback;
  }
}

function setTimeOutPromisified(delay) {
  return new PromiseImp(function (resolve) {
    setTimeout(resolve, delay);
  });
}

function cb() {
  console.log("3 Seconds are passed!");
}

setTimeOutPromisified(3000).then(cb);
