//type annotations
let num: number = 25;
let text: string = "hello ts!";
let isMarried: boolean = true;
let person: object = {
  id: 1,
  fullName: "John Doe",
};
let bigNum: bigint = 12n;
let box: null = null;
let animal: undefined;
const uniqueId: symbol = Symbol("id");

//type inference
let age = 45;

//ts types
let numbers: Array<number> = [1, 2, 3, 4, 5];
let capitals: Array<string> = ["Baku", "Ankara"];
//tuple type
let coordinates: [number, number] = [10, 20];
let directions: [number, number, number, number] = [1, 2, 3, 4];

//union type
let id: number | string = "1234al";
//literal string type union
let apiStatus: "loading" | "error" | "success" = "error";

//human - id, fullName, age, isMarried, hobbies
type ID = number | string;
type HumanType = {
  id: ID;
  fullName: string;
  age: number;
  isMarried: boolean;
  hobbies: string[];
};

let human: HumanType = {
  id: 1,
  fullName: "John Doe",
  age: 24,
  isMarried: true,
  hobbies: ["football", "coding"],
};

//enum +, never, unknown, void
//never vs unknown
enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}

console.log(UserRole.Viewer);

enum HttpStatus {
  OK = 200,
  NotFound = 404,
  Unauthorized = 401,
  Forbidden = 403,
  InternalServerError = 500,
}

function handleResponse(code: HttpStatus) {
  if (code === HttpStatus.NotFound) {
    console.log("Resource not found.");
  }
}

handleResponse(HttpStatus.NotFound);

function greet(firstName: string, lastName: string): void {
  console.log(`hello ${firstName} ${lastName}`);
}

//type annotations | type inference
let productPrice: number = 3.5;
//basic types
//boolean, string, number, object, undefined, null, bigInt, symbol
// void, any, never, unknown, enum, tuple, union, literal types
function test(): void {
  console.log("hey test!");
}

let y: any = 56;

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
enum Directions {
  Top = "top",
  Left = "left",
  Right = "right",
  Bottom = "bottom",
}

enum WeekDays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(WeekDays.Sunday); //4

let currentUserRole: UserRole = UserRole.Admin;

//tuple
// let myTuple: [string, number, boolean];
// myTuple = ["ok", 200, true];

//unions
const price: number | bigint = 3n;

//literal types
const httpStatus: 404 | 200 | 500 | 204 = 404;
const message: "hello" = "hello";

//array types and object types, function types
let arr: (number | boolean)[] = [1, 2, true];
let arr2: Array<number | boolean> = [1, 2, 3, false]; //generics

function calculateSum(a: number, b: number): number | string {
  if (a > 0 && b > 0) {
    return a + b;
  } else {
    return "both are not positive numbers!";
  }
}

type Animal = {
  id: number;
  breed: string;
  name: string;
  gender: string;
  paws: number;
  hasOwner: boolean;
};
let simba: Animal = {
  id: 1,
  breed: "scotland cat",
  name: "simba",
  gender: "male",
  paws: 4,
  hasOwner: true,
};

//type alias +, interfaces +, type narrowing(guarding) +
// intersections +, oop +, typical assertions (as) +,
// optional chaining +, generics,

//type alias
type Message = string;
type FinCode = string | number;
let msg: Message = "hello world!";
let fin1: FinCode = "123wer";

type GreeterFunction = (name: string) => string;

const greet1: GreeterFunction = (name) => `Hello, ${name}!`;
console.log(greet1("TypeScript"));

//intersections
type Human = {
  id: string;
  fullName: string;
  age: number;
};
type Employee = {
  salary: number;
  position: string;
};

type HumanEmployee = Human &
  Employee & {
    hobbies: string[];
  };

const emp1: HumanEmployee = {
  id: "1",
  fullName: "Jane Smith",
  age: 45,
  salary: 6000,
  position: "HR",
  hobbies: ["dance"],
};

type NeverType = string & number;

//type narrowing (type guarding)
function display(text: string | number): void {
  //type narrowing
  if (typeof text === "string") {
    console.log(`result: `, text.toUpperCase());
  } else {
    console.log("result number: ", text);
  }
}

display("hello");

//interfaces
interface IPerson {
  id: string | number;
  fullName: string;
  pets: string[];
  age: number;
  greet: () => void;
}
interface IPerson {
  lastName?: string;
}

interface IEmployee extends IPerson {
  position: string;
}

class Person implements IPerson {
  public id;
  public fullName: string;
  public age: number;
  public pets: string[];
  constructor(id: string | number, fullName: string, age: number) {
    this.id = id;
    this.fullName = fullName;
    this.age = age;
    this.pets = [];
  }
  greet() {
    console.log("hey there!");
  }
}

type IDD = string | number;

// type Person = {
//   id: string | number;
//   fullName: string;
//   pets: string[];
//   age: number;
// };

// TYPE ALIAS VS INTERFACE VS CLASS

const tahir: IPerson = {
  id: 1,
  fullName: "Tahir Imanov",
  pets: ["simba", "max"],
  age: 32,
  greet: () => {
    console.log("hey there!");
  },
};

abstract class Shape {
  abstract getArea(): number;

  describe() {
    console.log("This is a shape");
  }
}

// const square = new Shape();
//typical assertions, global types file, import exports

let value: any = "hello"; //as
// let strLength: number = (<string>value).length;
let strLength: number = (value as string).length;

// let someVar: number | string;
// someVar = "hello";

// if ((someVar as string).length) {
//   console.log("It's a string!");
// }

// Get DOM elements with type assertions
const input = document.getElementById("nameInput") as HTMLInputElement;
const button = document.getElementById("greetBtn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;

// Add event listener (optional type guarding)
button?.addEventListener("click", (e: Event) => {
  console.log(e.target);
  const name = input.value.trim();
  output.textContent = name ? `Hello, ${name}! 👋` : "Please enter your name.";
});

//generics, utility types
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString"); // Type of output1 is string
let output2 = identity<number>(100); // Type of output2 is number

function syncFunc(): string {
  return "hello test function!";
}
async function asyncFunc(): Promise<string> {
  return "hello async function!";
}

//fetch products
const productsBtn = document.querySelector("#products") as HTMLButtonElement;
const getData = async function <T extends { id: number }>(
  url: string
): Promise<T[]> {
  const resData = await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data: T[]) => {
      return data;
    });

  return resData;
};

interface ApiResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
productsBtn?.addEventListener("click", (e: Event) => {
  getData<ApiResponse>("https://jsonplaceholder.typicode.com/todos").then(
    (todos) => {
      console.log("todos: ", todos);
    }
  );
  getData<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>("https://jsonplaceholder.typicode.com/posts").then((posts) => {
    console.log("posts: ", posts);
  });
});
