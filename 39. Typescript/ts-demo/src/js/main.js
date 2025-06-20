"use strict";
//type annotations
let num = 25;
let text = "hello ts!";
let isMarried = true;
let person = {
    id: 1,
    fullName: "John Doe",
};
let bigNum = 12n;
let box = null;
let animal;
const uniqueId = Symbol("id");
//type inference
let age = 45;
//ts types
let numbers = [1, 2, 3, 4, 5];
let capitals = ["Baku", "Ankara"];
//tuple type
let coordinates = [10, 20];
let directions = [1, 2, 3, 4];
//union type
let id = "1234al";
//literal string type union
let apiStatus = "error";
let human = {
    id: 1,
    fullName: "John Doe",
    age: 24,
    isMarried: true,
    hobbies: ["football", "coding"],
};
//enum +, never, unknown, void
//never vs unknown
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Editor"] = "editor";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
console.log(UserRole.Viewer);
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["Forbidden"] = 403] = "Forbidden";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
function handleResponse(code) {
    if (code === HttpStatus.NotFound) {
        console.log("Resource not found.");
    }
}
handleResponse(HttpStatus.NotFound);
function greet(firstName, lastName) {
    console.log(`hello ${firstName} ${lastName}`);
}
//type annotations | type inference
let productPrice = 3.5;
//basic types
//boolean, string, number, object, undefined, null, bigInt, symbol
// void, any, never, unknown, enum, tuple, union, literal types
function test() {
    console.log("hey test!");
}
let y = 56;
// never vs. unknown
// function testFunc():never {
//   // throw new Error("bug!");
//   // while (5 > 4) {
//   //   console.log("infinite loop");
//   // }
// }
// let z: unknown = 5;
// console.log(z.toLowerCase());
//enums
var Directions;
(function (Directions) {
    Directions["Top"] = "top";
    Directions["Left"] = "left";
    Directions["Right"] = "right";
    Directions["Bottom"] = "bottom";
})(Directions || (Directions = {}));
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays.Sunday); //4
let currentUserRole = UserRole.Admin;
//tuple
// let myTuple: [string, number, boolean];
// myTuple = ["ok", 200, true];
//unions
const price = 3n;
//literal types
const httpStatus = 404;
const message = "hello";
//array types and object types, function types
let arr = [1, 2, true];
let arr2 = [1, 2, 3, false]; //generics
function calculateSum(a, b) {
    if (a > 0 && b > 0) {
        return a + b;
    }
    else {
        return "both are not positive numbers!";
    }
}
let simba = {
    id: 1,
    breed: "scotland cat",
    name: "simba",
    gender: "male",
    paws: 4,
    hasOwner: true,
};
let msg = "hello world!";
let fin1 = "123wer";
const greet1 = (name) => `Hello, ${name}!`;
console.log(greet1("TypeScript"));
const emp1 = {
    id: "1",
    fullName: "Jane Smith",
    age: 45,
    salary: 6000,
    position: "HR",
    hobbies: ["dance"],
};
//type narrowing (type guarding)
function display(text) {
    //type narrowing
    if (typeof text === "string") {
        console.log(`result: `, text.toUpperCase());
    }
    else {
        console.log("result number: ", text);
    }
}
display("hello");
class Person {
    constructor(id, fullName, age) {
        this.id = id;
        this.fullName = fullName;
        this.age = age;
        this.pets = [];
    }
    greet() {
        console.log("hey there!");
    }
}
// type Person = {
//   id: string | number;
//   fullName: string;
//   pets: string[];
//   age: number;
// };
// TYPE ALIAS VS INTERFACE VS CLASS
const tahir = {
    id: 1,
    fullName: "Tahir Imanov",
    pets: ["simba", "max"],
    age: 32,
    greet: () => {
        console.log("hey there!");
    },
};
class Shape {
    describe() {
        console.log("This is a shape");
    }
}
// const square = new Shape();
//typical assertions, global types file, import exports
let value = "hello"; //as
// let strLength: number = (<string>value).length;
let strLength = value.length;
// let someVar: number | string;
// someVar = "hello";
// if ((someVar as string).length) {
//   console.log("It's a string!");
// }
// Get DOM elements with type assertions
const input = document.getElementById("nameInput");
const button = document.getElementById("greetBtn");
const output = document.getElementById("output");
// Add event listener (optional type guarding)
button?.addEventListener("click", (e) => {
    console.log(e.target);
    const name = input.value.trim();
    output.textContent = name ? `Hello, ${name}! 👋` : "Please enter your name.";
});
//generics, utility types
function identity(arg) {
    return arg;
}
let output1 = identity("myString"); // Type of output1 is string
let output2 = identity(100); // Type of output2 is number
function syncFunc() {
    return "hello test function!";
}
async function asyncFunc() {
    return "hello async function!";
}
//fetch products
const productsBtn = document.querySelector("#products");
const getData = async function (url) {
    const resData = await fetch(url)
        .then((res) => {
        return res.json();
    })
        .then((data) => {
        return data;
    });
    return resData;
};
productsBtn?.addEventListener("click", (e) => {
    getData("https://jsonplaceholder.typicode.com/todos").then((todos) => {
        console.log("todos: ", todos);
    });
    getData("https://jsonplaceholder.typicode.com/posts").then((posts) => {
        console.log("posts: ", posts);
    });
});
