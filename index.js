// EXAMPLE 1 - Check if an Object is of type Map in JavaScript

const map = new Map();
map.set('site', 'bobbyhadz');

console.log(map instanceof Map); // 👉️ true
console.log('test' instanceof Map); // 👉️ false
console.log({} instanceof Map); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using duck-typing to check if an object is a Map

// function isMap(map) {
//   if (
//     map &&
//     typeof map.clear === 'function' &&
//     typeof map.delete === 'function' &&
//     typeof map.get === 'function' &&
//     typeof map.has === 'function' &&
//     typeof map.set === 'function'
//   ) {
//     return true;
//   }

//   return false;
// }

// const map = new Map();
// console.log(isMap(map)); // 👉️ true

// const set = new Set();
// console.log(isMap(set)); // 👉️ false

// console.log(isMap({})); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if an Object is of type Set in JavaScript

// const set = new Set();
// set.add('JavaScript');

// console.log(set instanceof Set); // 👉️ true
// console.log('test' instanceof Set); // 👉️ false
// console.log({} instanceof Set); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using duck-typing to check if an object is a `Set`

// function isSet(set) {
//   if (
//     set &&
//     typeof set.add === 'function' &&
//     typeof set.clear === 'function' &&
//     typeof set.delete === 'function' &&
//     typeof set.has === 'function'
//   ) {
//     return true;
//   }

//   return false;
// }

// const set = new Set();
// console.log(isSet(set)); // 👉️ true

// const map = new Map();
// console.log(isSet(map)); // 👉️ false

// console.log(isSet({})); // 👉️ false
