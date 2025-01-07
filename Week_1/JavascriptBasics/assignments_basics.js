// Assignment 1: Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like
// pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

// const favColor = "blue";
// let height = 162;
// const likePizza = true;

// console.log(favColor);
// console.log(height);
// console.log(likePizza);

// Assignment 2: Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(3, 4));
// console.log(sum("Deepak", "Kumar")); // Will Concatenate the string

// Assignment 3: Write a function called canVote that returns true or false if the age of a user is > 18

// function CanVote(age) {
//   if (age > 18) {
//     return true
//   } else {
//     return false;
//   }
// }

// CanVote(5);
// CanVote(18);
// CanVote(30);

// Assignment 4: Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

// let n = 6;

// if (n % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd.");
// }

// Assignment 5: Write a function called sum that finds the sum from 1 to a number

function sumToN(n) {
  let req_sum = 0;
  for (let i = 1; i <= n; i++) {
    req_sum += i;
  }

  return req_sum;
}

console.log(sumToN(10));
console.log(sumToN(50));
