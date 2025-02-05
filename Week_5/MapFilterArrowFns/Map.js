//Map Function: Helper function for arrays.
//Exists as a function in the array class

//Syntax: array.map(transformation function)

//Use Case: Write a function to create a new array which contains all the elements multiplied by 2 from an existing array

//Naive Approach:

let existingArr = [1, 2, 3, 4, 5];

let newArary = [];

for (let i = 0; i < existingArr.length; i++) {
  newArary.push(existingArr[i] * 2);
}

console.log(newArary);

//Better approach using Map
//Syntax 1
function transformation(i) {
  return i * 2;
}

const mapArr1 = existingArr.map(transformation);

console.log(mapArr1);

//Syntax 2
const mapArr2 = existingArr.map(function (i) {
  return i * 2;
});

console.log(mapArr2);

//Syntax 3
const mapArr3 = existingArr.map((i) => i * 2);

console.log(mapArr3);
