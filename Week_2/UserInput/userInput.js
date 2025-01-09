const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for their name
rl.question("What is your name? ", function (userName) {
  if (userName) {
    console.log(`Hello, ${userName}! Welcome!`);
  } else {
    console.log("You didn't enter your name!");
  }
  rl.close(); // Close the interface after use
});
