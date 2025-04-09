// json, nullish ?? +
// break, continue +
// custom methods (String, Array, Boolean)
// shallow copy vs deep copy
// const lodash = require("lodash");
// import lodash from "lodash";

// JSON format - backend vs frontend - API
// JSON - Javascript Object Notation
// const json = {
//   songs: [
//     {
//       id: 1,
//       title: "song 1",
//       author: "author 1",
//     },
//     {
//       id: 2,
//       title: "song 2",
//       author: "author 2",
//     },
//   ],
// };

// let numbers = [1, 2, 3, 41, 5, 6, 72, 8, 9];
// // break; continue;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 9 && numbers[i] < 100) {
//     continue;
//   }
//   console.log("element: ", numbers[i]);
// }

// const obj = {
//   a: 1,
// };

//shallow copy
// const copy = { ...obj };
// const copy2 = Object.assign({}, obj);
// copy2.a = 21;
// console.log(copy2);

//deep copy
const person = {
  fullName: "John Doe",
  address: {
    city: "NYC",
    country: "USA",
  },
};

const newObj = { ...person };
//deep copy
// const copy = lodash.cloneDeep(person);
// copy.address.country = 'Mexico';

// console.log(copy);
// console.log(person);
//reference
// const copy = obj;
// copy.a = 21;


