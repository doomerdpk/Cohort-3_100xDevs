//Overview:
// The reduce() function in JavaScript is a method that executes a reducer function on each element of an array, resulting in a single output value.
//Syntax: array.reduce(callback, initialValue);

//Various use cases:
//Use case 1: Sum, Maximum and Minimum of an array
const numbers = [1, 2, 3, 4, 5, 0];

const finalSum = numbers.reduce((accumulator, currentObject) => {
  return accumulator + currentObject;
}, 0);

console.log(finalSum);

const finalMaximum = numbers.reduce((accumulator, currentObject) => {
  return Math.max(accumulator, currentObject);
}, numbers[0]);

console.log(finalMaximum);

//Use Case 2: Grouping the elemnets based on a property. In below case, grouping needs to be done based on age
let people = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];
let groupedPeople = people.reduce((accumulator, currentObject) => {
  let key = currentObject.age;
  if (!accumulator[key]) {
    accumulator[key] = [];
  }
  accumulator[key].push(currentObject);
  return accumulator;
}, {});
console.log(groupedPeople);
