// // variables
// let fullName = "John Doe"; //value
// let age = 21;
// let isMarried = false;
// let hasChildren = true;

// // variable naming convention - PascalCase, camelCase, snake_case
// const API_URL = "https://local:host/5000";

// // function displayAveragePoint() {
// //   console.log("test");
// // }

// // STRING, NUMBER, BIGINT, BOOLEAN, NULL, UNDEFINED, SYMBOL, OBJECT

// let letter = "a"; //char - character
// let studentName = "John Doe"; //string

// let studentAge = 21; //integer - number
// let point = 75.5; //decimal, double, float - number
// // let x = Infinity;
// // let y = -Infinity;

// let num1 = 123n;

// let isFreshman = false;

// let a = null;
// let b = undefined;

// console.log(a);
// console.log(b);

// const finCode = new Symbol("155d354");

// const person = {
//   fullName: "Jane Doe",
//   age: 23,
//   isMarried: true,
//   gender: "female",
//   hobbies: ["football", "dancing"],
//   bio: null,
// };

// Truthy Falsy

//Falsy
// console.log(false); //falsy
// console.log(0);
// console.log(-0);
// console.log(""); //empty string
// console.log(null);
// console.log(undefined);
// console.log(NaN);

//Truthy
// console.log("false");
// console.log(-1);
// console.log([]);
// console.log({});
// console.log(function display() {});
// console.log("false");

//TYPE CONVERSIONS - IMPLICIT, EXPLICIT

//IMPLICIT
// let result = "The number is " + 5; //string
// let result2 = 5 + 8 + "hey" + 13; //13hey13 - concat, string
// let fullName = "John" + " " + "Doe"; //John Doe

// let result3 = "10" - 2 + "6" + "1";
// console.log("x", result3); // 861

// if ("12" - 1 - "hello") {
//   console.log("hey");
// } else {
//   console.log("bye");
// }

// console.log(5 * "jane");

// let num = 123;
// console.log(String(num)); // "123"

// let str = "141";
// console.log(Number(str)); // NaN

// console.log(+"42"); // 42

// console.log(parseInt("42px")); // 42
// console.log(parseFloat("42.5px")); // 42.5

// console.log(Number(13.3333333333).toFixed(2));

// JS operators - arithmetic, assignment, comparison, logical, bit-wise, typeof
// let num1 = 5;
// let num2 = 7;

// let num3 = 10;

// // num3 += 10; //? - 20 // num3 = num3 + 10
// num3 *= 2; //? - 20

// num1 -= 15; //? - -10

// let age = 19;
// let hasAccess = age > 18 ? "adult" : age == 18 ? "young" : "minor";

// console.log(hasAccess);

// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;
// console.log(result);

// let firstName = "John";
// let lastName = "Doe";
// let age = 27;
// let fullName = `${firstName} ${lastName} is ${age} years old`; //string literal template
// console.log(fullName);

// console.log(num1 + num2); //12
// console.log(num1 - num2); //-2
// console.log(num1 * num2); //35
// console.log(num1 / num2); //
// console.log(num1 ** 2); //25
// console.log(num2 % 2); //? - 1
// console.log(num1++); //? - 5
// console.log(num1--); //? - 5

// let hasTicket = true;
// let isAdult = true;

// let hasAccess = hasTicket || isAdult;
// console.log(hasAccess);

//explicit type conversion
// console.log(Boolean([] || {} && 0 && ' ' || false || true)); //? -

//if, else, else if, switch-case, ternary - Condition Statements

// age > 18
//   ? console.log("welcome")
//   : age == 18
//   ? console.log("hey there")
//   : console.log("not access!");

// let day = 5;
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   default:
//     console.warn("invalid");
//     break;
// }

// let age = 19;

// if (age > 18) console.log("welcome");

// if (age == 18) {
//   console.log("hey");
// } else {
//   console.log("not access");
// }

// let user = "user"; //user
// let message = user == "guest" ?? "welcome guest";

// console.log(message);

// console.log(typeof numbers); //? - object

// console.log(numbers.length);
// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1]);
// console.log(numbers[3]);
// console.log(numbers[99]);

//LOOP STATEMENTS - for, while, do while (foreach, for...in, for...of)

// let num = 23;
// do {
//   console.log("hey while loop!");
//   break;
// } while (num % 2 === 0);

// let planet = "mars";
// let reversedPlanet = "";

// for (let index = planet.length - 1; index >= 0; index--) {
//   reversedPlanet += planet[index];
// }

// console.log(reversedPlanet);

// let numbers = [10, 20, 30, 40, 50, 60, 70];

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] *= 2;
// }

// console.log(numbers); //[20, 40, 60, 80, 100, 120, 140]

//REFERENCE TYPE
const numbers1 = [1, 2, 3];

// numbers1[3] = 4; ok
// numbers1 = [45, 42, 12]; //not ok
// console.log(numbers1);

const numbers2 = [...numbers1, 100, 200];

numbers1[0] = "HEY";

console.log(numbers2);
