//CALLBACK FUNCTION

// HOF - Higher Order Function
function greet(callback, name) {
  callback(name);
}

greet(function (x) {
  console.log(x);
}, "John");

//IIFE
// const sum = ((a, b) => {
//   console.log(`sum of ${a} and ${b} is ${a + b}`);
//   return a + b;
// })(10, 25);

// console.log(sum);

// (function(){
//     console.log('function executed...')
// })();

const numbers = [1, 2, 31, 123, 4, 1, 3, 54, 123, 1, 3, 45];

// console.log(numbers.includes(544));

//predicate => returns boolean
const found = numbers.find(function (number) {
  return number > 100;
});
console.log(found);

// console.log(numbers.indexOf(123, numbers.indexOf(123) + 1));

// const idx = numbers.indexOf(54);
// numbers.splice(idx, 1);

// if(numbers.indexOf(7) === -1){
//     console.log('7 is not in the array!');
// }
