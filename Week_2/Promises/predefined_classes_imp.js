//For any Time Related Stuff
// Created a new object - now as an object of the date class.
const now = new Date();

console.log(now);
console.log(typeof now);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());

//For any key-value pair stuff
//created a new object - map as an object of the map class.
const map = new Map();
//setter function to set the value of the keys
map.set("name", "deepak");
map.set("age", "24");
//getter function to get the value of the keys
console.log(map.get("name"));
console.log(map.get("age"));
