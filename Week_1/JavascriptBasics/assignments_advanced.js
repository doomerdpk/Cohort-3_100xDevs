// Assignment 1: Write a function that takes a user as an input and greets them with their name and age

// function greet(user) {
//   console.log("Hello " + user.name + ", you age is: " + user.age);
// }

// let user = {
//   name: "Deepak",
//   age: 24,
// };

// greet(user);

// Assignment 2: Write a function that takes a object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs harkirat, your age is 21)
// Also tell the user if they are legal to vote or not

// function greet(user) {
//   let CanVote = user.age >= 18 ? "" : "not";
//   if (user.gender == "female") {
//     console.log(
//       "Mrs. " +
//         user.name +
//         ", your age is: " +
//         user.age +
//         ". You are " +
//         CanVote +
//         " eligible to vote"
//     );
//   } else {
//     console.log(
//       "Mr. " +
//         user.name +
//         ", your age is: " +
//         user.age +
//         ". You are " +
//         CanVote +
//         " eligible to vote"
//     );
//   }
// }
// Can use ternary operator in above case to reduce the amount of code

// let user1 = {
//   name: "Deepak",
//   age: 24,
//   gender: "male",
// };

// let user2 = {
//   name: "Pooja",
//   age: 25,
//   gender: "female",
// };

// let user3 = {
//   name: "Raushan",
//   age: 16,
//   gender: "male",
// };

// greet(user1);
// greet(user2);

// greet(user3);

// Assignment 3: Write a function that takes an array of numbers as input, and returns a new array with only even values.

//Method 1:
// function onlyEven(arr) {
//   let res_arr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       res_arr.push(arr[i]);
//     }
//   }
//   return res_arr;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(onlyEven(arr));

//Method 2:
// const arr = [1, 2, 3, 4, 5];

// const res_arr = arr.filter((n) => n % 2 == 0);

// console.log(res_arr);

//Assignment 4: Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

//Method 1:
// function MoreThan18(users) {
//   let res_users = [];

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 18) {
//       res_users.push(users[i]);
//     }
//   }

//   return res_users;
// }

// let users = [
//   {
//     name: "Deepak",
//     age: 24,
//   },
//   {
//     name: "Pratik",
//     age: 26,
//   },
//   {
//     name: "Raushan",
//     age: 15,
//   },
// ];

// // console.log(MoreThan18(users));

// //Method 2:
// const res_users = users.filter((user) => user.age > 18);

// console.log(res_users);

//Assignment 5: Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male

//Method1:
// function Male18(users) {
//   let res_users = [];

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 18 && users[i].gender === "male") {
//       res_users.push(users[i]);
//     }
//   }
//   return res_users;
// }

let users = [
  {
    name: "Deepak",
    age: 24,
    gender: "male",
  },
  {
    name: "Maitree",
    age: 27,
    gender: "female",
  },
  {
    name: "Raushan",
    age: 15,
    gender: "male",
  },
];

// // console.log(Male18(users));

//Method2:

const res_users = users.filter(
  (user) => user.age > 18 && user.gender === "male"
);

console.log(res_users);
