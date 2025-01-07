// Use Case: Write a function that takes an array of numbers as input and returns a new array having all the elements of original array multiplied by 2

//Method 1:

function Multiply2(numbers) {
  let res_arr = [];

  for (let i = 0; i < numbers.length; i++) {
    res_arr.push(numbers[i] * 2);
  }

  return res_arr;
}

let numbers = [1, 2, 3, 4, 5];

console.log(Multiply2(numbers));

//Method 2:

const res_arr = numbers.map((n) => n * 2);

console.log(res_arr);
