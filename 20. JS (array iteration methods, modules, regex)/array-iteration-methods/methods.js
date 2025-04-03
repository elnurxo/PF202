// ITERATION METHODS - Array
let numbers = [12, 2, 32, 42, 56, 65, 102];

//every, some
// const checkAllEven = numbers.every((item, idx, arr) => {
//   return item % 2 == 0;
// });
// const checkOdd = numbers.some((item, idx, arr) => {
//   return item % 2 == 1;
// });
// console.log(checkOdd); //? - false

// const str = Array.from("salam");
// console.log(str);

// const keys = numbers.entries();

// for (const key of keys) {
//   console.log(key);
// }

//reduce
// const totalSum = numbers.reduce((prevValue, currentValue) => {
//   return (prevValue += currentValue);
// }, 0);

// console.log(totalSum);

//filter
// let filteredNumbers = numbers.filter((item, idx, arr) => {
//   return item > 9 && item < 100;
// });

// console.log(filteredNumbers);

// const x = numbers.forEach((item) => {
//   console.log(item);
// });

// console.log(x); //undefined

// const x = numbers.map((item, idx, arr) => {
//   return item;
// });

const y = [...numbers]; //new reference copy

// numbers[0] = 'kiwi';
// console.log(y[0]);

// console.log(numbers);
// console.log(x); //? - [2,4,6,8,10];

const months = ["January", "February", "March", "April"];
const myMonths = months.with(1, "March");
console.log(months)
console.log(myMonths);
