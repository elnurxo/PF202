// const person = {
//   fullName: "John Doe", //string
//   age: 21, //number
//   pets: ["dog", "cat", "hamster"],
//   address: {
//     city: "Baku",
//     country: "Azerbaijan",
//     streetNumber: "Nizami 17",
//   },
// };

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.address.country);
// console.log(person.pets[0]);

//REFERENCE TYPE OBJECT (ARRAY)
// const bmw = {
//   //keys, values, entity, properties
//   name: "BMW",
//   model: "X5",
//   weight: "850kg",
//   milage: 10_000,
//   year: 2014,
//   color: "white",
//   //methods
//   startEngine: () => {
//     console.log("RU TU TU TU");
//   },
//   drive: function (km) {
//     this.milage += km;
//     return this;
//   },
// };

// const x = bmw.drive(35);
// console.log(x);

// let { model: mod, milage: probeg } = bmw; // DESTRUCT
// console.log(mod, probeg);
// console.log(mod, "\n",probeg);
// console.log(`${mod}, ${probeg}`);

// const bmw2 = { ...bmw }; //reference, SPREAD
// bmw2.name = "mercedes";
// console.log(bmw2);
// console.log(bmw);
// bmw.engine = "2.0T"; okay
// bmw.model = 'X6'; okay
// bmw = {
//   model: "X6",
// }; error

// console.log(bmw); //? - engine+

// const product = {
//   name: "coca cola",
//   price: 1.5,
//   "category-name": "drink",
//   ml: 500,
// };

// const { name: title } = product; //destructing
// console.log(product['category']);
// console.log(product["category-name"]);

// let user = new Object(); // {} => empty object
// let arr = []; // new Array();

// let user = {
//   name: "john",
//   age: 21,
//   "likes birds": true,
// };
//mutable
// user.isAdmin = true;
// delete user.name;
// delete user.age;
// delete user.isAdmin;
// console.log(user);

// console.log(user["likes birds"]);
// window.alert(`${user.name}`);

// let user = {
//   name: "John",
//   age: 30,
// };

// let key = prompt("What do you want to know about the user?", "name");

// // access by variable
// alert(user[key]); // John (if enter "name")

// let fruit = prompt("Which fruit to buy?", "apple"); //key

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert(bag.apple); // 5 if fruit="apple"

// const age = 21;
// const userName = "john_123";

// let user = {
//   age, //? - 21
//   userName, //? - john_123
// };

// console.log(user.userName);

//function constructor
// function makeUser(userName, age, gender) {
//   return {
//     userName: userName,
//     age,
//     gender,
//   };
// }

// const john = makeUser("john_123", 26, "male");
// const jane = makeUser("jane", 18, "female");
// console.log(john);

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
//   const: 2
// };

// let obj = {};
// obj.__proto__ = 5; // assign a number

// console.log(obj);

// const animal = {
//   eats: true,
// };

// const rabbit = {
//   jumps: true,
// };

// // Set animal as the prototype of rabbit
// rabbit.__proto__ = animal;

// console.log(rabbit.jumps); // true (own property)
// console.log(rabbit.eats); // true (inherited from prototype)

// const vehicle = {
//   color: "white",
// };

// const car = {
//   engine: "2.0",
// };
// const bicycle = {
//   bell: true,
// };

// bicycle.__proto__ = vehicle;
// car.__proto__ = vehicle;

// console.log(bicycle.color);
// console.log(car.color);

// const person = {
//   name: "John Doe",
//   age: 21,
//   gender: "male",
// };

// const x = Object.entries(person);
// [[name,john], [age,21],[gender,male]];
// console.log(x[0][1]); //? - John Doe

//for...in (Object), for...of
// for (const key in person) {
//   console.log(person[key]);
// }
// let numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//   if (number % 2 == 1) {
//     console.log(number);
//   }
// }

// const settings = { theme: "dark" };
// Object.freeze(settings);
// settings.theme = "light"; //freeze
// settings.mode = "auto";
// console.log(settings);

// const person = {
//   greet() {
//     return `Hi, I'm ${this.name || "anonymous"}`;
//   },
// };

// const dev = Object.create(person);
// dev.name = "Bob";
// console.log(dev.greet()); // "Hi, I'm Bob"

// console.log('age' in person);

// console.log(Object.hasOwn(user,'age'));

// Object.entries(person);

// let person = {
//   userName: "john",
//   age: 21,
// };

// console.log(Object.getOwnPropertyDescriptors(person));

const animal = {
  name: "hey",
  age: 15,
  speak() {
    console.log("Animal sound");
  },
};

const dog = {
  //method (anonym, arrow, regular)
  age: 21,
  bark() {
    console.log("Woof!");
  },
};

// Set dog’s prototype to animal
Object.setPrototypeOf(dog, animal);

console.log(dog.age);
dog.speak(); // "Animal sound"
dog.bark(); // "Woof!"
