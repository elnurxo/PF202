//JS FUNCTIONS... (hoisting, [regular, arrow, anonym], pure, closure, HOF, IIFE, callbacks)

//regular functions, FUNCTION SIGNATURE
function greet(hour) {
  if (hour >= 8 && hour <= 12) {
    console.log("Good Morning!");
  } else if (hour > 12 && hour <= 20) {
    console.log("Good Afternoon!");
  } else if (hour > 20 && hour <= 22) {
    console.log("Good Evening!");
  } else if (hour > 22 && hour <= 24) {
    console.log("Good Night!");
  } else {
    console.log("Invalid Value");
  }
}

//function argument
// greet(19);

// function displayInfo(firstName, lastName, age, country) {
//   let infoMessage = `${firstName} ${lastName} is ${age} years old & was born in ${country}`;
//   return infoMessage;
// }
// let age = 24;
// const infoJohn = displayInfo("John", "Doe", age, "USA");
// console.log(infoJohn);
// console.log(displayInfo("Sergio", "Ramoz", 45, "Spain"));

//pure
//REGULAR FUNCTION
// function calculateSum(num1, num2) {
//   if (num1 > 0 && num2 > 0) {
//     return num1 + num2;
//   } else {
//     return num1 * num2;
//   }
// }

// console.log(calculateSum(-10, 23));

//arrow functions | FUNCTION EXPRESSION
const sumArrow = (num1, num2) => num1 + num2;

const displayHello = () => {
  console.log("Hello there!");
  return 5;
};

// console.log(displayHello());
// this

// let x = 10;
// let y = 12;
// const res = sumArrow(x, y);

//anonym function -> function expression
const sumAnonym = function (num1, num2) {
  return num1 + num2;
};

console.log(sumAnonym(13, 23));

// calling function, invoking function, function declaration
