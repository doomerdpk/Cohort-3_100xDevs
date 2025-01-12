class Promise2 {
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      this.resolves.forEach((fn) => fn());
    });
  }

  then(fn) {
    if (!this.resolves) {
      this.resolves = [];
    }
    this.resolves.push(fn);
  }
}

function setTimeoutPromisified(delay) {
  return new Promise2(function (resolve) {
    setTimeout(resolve, delay);
  });
}

setTimeoutPromisified(1000).then(function () {
  console.log("Hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("Hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("Hi There!");
    });
  });
});
