//Filter Function: Helper function for arrays.
//Exists as a function in the array class

//Syntax: array.filter(filtering function)

//Use Case: Write a function to create a new array which contains only the even elements from an existing array

//Naive Approach:

let existingArr = [1, 2, 3, 4, 5];

let newArary = [];

for (let i = 0; i < existingArr.length; i++) {
  if (existingArr[i] % 2 === 0) {
    newArary.push(existingArr[i]);
  }
}

console.log(newArary);

//Better Approach using filter function
//Syntax 1:
function filteringfunction(i) {
  if (i % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const filterArr1 = existingArr.filter(filteringfunction);
console.log(filterArr1);

//Syntax2:

const filterArr2 = existingArr.filter(function (i) {
  if (i % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filterArr2);

//Syntax 3:

const filterArr3 = existingArr.filter((i) => (i % 2 == 0 ? true : false));
console.log(filterArr3);
