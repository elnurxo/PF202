// OOP - Object Oriented Programming
// const toyota = {
//   brand: "Toyota",
//   model: "Corolla",
//   start: function () {
//     console.log("Maşın işə düşdü!");
//   },
// };
// const mercedes = {
//   brand: "Mercedes",
//   model: "Benz",
//   start: function () {
//     console.log("Maşın işə düşdü!");
//   },
// };

// //CLASSES - Pascal case
// class Car {
//   //properties
//   brand;
//   model;
//   year;

//   //constructor - first method
//   constructor(brand, model, year = 2000) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
// }

// const sonata = new Car("kia", "sonata", 2021);
// const bmw = new Car("bmw", "M5", 2023);

// console.log(sonata instanceof Car);
// const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;
// class User {
//   //properties
//   id;
//   createdAt;
//   username;
//   password;
//   email;

//   //first method
//   constructor(username, email, password) {
//     this.id = Math.floor(Math.random(100) * 1000);
//     this.createdAt = new Date().toDateString();
//     this.username = username;
//     //REGEX
//     if (PASSWORD_REGEX.test(password)) {
//       this.password = password;
//     } else {
//       this.password = "Password123";
//       window.alert("your password is weak, default password set: Password123");
//     }
//     this.email = email;
//   }

//   //methods
//   changePassword(oldPassword, newPassword) {
//     if (this.password === oldPassword) {
//       this.password = newPassword;
//       return this;
//     } else {
//       window.alert("wrong password!");
//     }
//   }
// }

// const john = new User("john_123", "john@gmail.com", "J34");
// console.log(john);

//OOP - 4 principe (Inheritance +, Polymorphism, Abstraction -, Encapsulation)
// class Animal {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   //methods
//   makeNoise() {
//     console.log(`${this.name} makes noise`);
//   }
// }
// class Lion extends Animal {
//   furColor;
//   constructor(name, age, furColor) {
//     //base constructor
//     super(name, age);
//     this.furColor = furColor;
//   }
//   kill() {
//     console.log(`${this.name} killed an animal`);
//   }
// }
// class Bird extends Animal {
//   wingColor;
//   constructor(name, age, wingColor) {
//     super(name, age);
//     this.wingColor = wingColor;
//   }
//   fly() {
//     console.log(`${this.name} can fly`);
//   }
// }
// class Cat extends Lion {
//   pawCount;
//   constructor(name, age, furColor, pawCount) {
//     super(name, age, furColor);
//     this.pawCount = pawCount;
//   }
//   moew() {
//     console.log(`Meow! My name is ${this.name}`);
//   }
// }

// const donatello = new Animal("turtle", 150);
// const simba = new Lion("simba", 7, "brown");
// const robin = new Bird("robin", 5, "red");
// const garfield = new Cat("garfield", 4, "orange", 4);

// class Animal {
//   speak() {
//     console.log("Heyvan danışır.");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("It hürür: Hav-hav!");
//   }
// }

// class Cat extends Animal {

// }

// const dog = new Dog();
// const cat = new Cat();
// cat.speak();

// encapsulation
// class BankAccount {
//   //access modifiers -> public, protected, private
//   #balance; // Private property

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   //setter
//   set balance(amount) {
//     if (amount > 50) {
//       this.#balance += amount;
//     }
//   }

//   //getter
//   get balance() {
//     return this.#balance;
//   }
// }

// class BirBank extends BankAccount {
//   constructor(initialBalance) {
//     super(initialBalance);
//   }
// }

// const account = new BirBank(100);
// console.log(account);
// account.balance = 200;
// console.log(account);

// class Person {
//   _age;
//   constructor(name, age) {
//     this.name = name;
//     this._age = age; // Protected property kimi qəbul olunur
//   }

//   getAge() {
//     return this._age;
//   }

//   setAge(newAge) {
//     if (newAge > 0) {
//       this._age = newAge;
//     } else {
//       console.log("Yaş düzgün olmalıdır.");
//     }
//   }
// }

// class Employee extends Person {
//   constructor(name, age, position) {
//     super(name, age);
//     this.position = position;
//   }

//   displayInfo() {
//     console.log(`Ad: ${this.name}, Yaş: ${this._age}, Mövqe: ${this.position}`);
//   }
// }

// const emp = new Employee("Əli", 30, "Proqramçı");
// // emp._age = 45;
// // console.log(emp);

// class Car {
//   static id = 1;
//   id;
//   constructor(brand, model) {
//     this.id = Car.id++;
//     this.brand = brand;
//     this.model = model;
//   }

//   static displayInfo() {
//     console.log(`hello Car`);
//   }
// }

// const toyota = new Car("toyota", "corolla");
// const hyundai = new Car("hyundai", "santa fe");
// const kia = new Car("kia", "optima");

// console.log(toyota);
// console.log(hyundai);
// console.log(kia);

// Car.displayInfo();

class Calculator {
  // Static property
  static pi = 3.14159;

  // Static method
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Statik metodlara və propertilərə sinifin özündən daxil oluruq
console.log(Calculator.pi); // 3.14159
console.log(Calculator.add(5, 3)); // 8
console.log(Calculator.multiply(4, 7)); // 28

// Statik metodlar obyekt vasitəsilə çağırıla bilməz
const calc = new Calculator();
// console.log(calc.add(1,2));
// console.log(calc.add(5, 3)); // Xəta: calc.add is not a function

// const print = function (val) {
//   console.log(val);
// };

const User = class {};

print("salam");
