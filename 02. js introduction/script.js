// let, var, const - keywords to declare variables
// variable naming conventions
// variable naming rules
// variable naming best practices
// let DogName = "Buddy"; // pascal case
// let dogName = "Buddy"; // camel case
// let dog_name = "Buddy"; // snake case
// let dog-name = "Buddy"; // kebab case  (HTML)
// const PI = 3.14; //constant variable

//string data type - characters, text
let firstName = "John"; //camel case - string
let lastName = "Doe"; //camel case - string
let characters = "!@#$%^&&**()"; //string
let letter = "a"; //char (datatype string)
let sentence = "I'm a student"; //string
const WEBSITE_URL = 'https://code.edu.az';

//number data type - integers, decimals
let age = 25; //integer
let price = 19.99; //decimal

//bigint
let num = 1355n; //bigint

//boolean - true / false
let isMarried = false;
let hasOwner = true;

let x = undefined;
let z = null;

let carSerialNumber = Symbol("99-SS-999"); //unique

let num1 = 5;
let num2 = 7;
let num3 = 9;

let numbers = [num1, num2, num3]; //array
let capitals = ["Baku", "Ankara", "Moscow", "Berlin"];

//object
let student = {
  firstName: "Rashad",
  lastName: "Ferhadov",
  GPA: 75,
  hasPassed: true,
  hobbies: ["playing guitar", "coding"],
};

//animal object
let dogObject = {
  //name, age, weight, skills list, hasOwner, color
  name: "Scooby Doo",
  age: 5,
  weight: 7.5,
  skills: ["invisible", "fly", "run"],
  hasOwner: true,
  color: "brown",
};
