//create numbers array
let cars = ["bmw", "mercedes", "hyundai", "kia", "chevrolet"];
let fruits = ["apple", "kiwi", "banana", "pineapple"];
let isSnowing = true;

//task 1
// let weather = 25; //0-10 (cold), 10-20 (mild), 20+ hot
// if (weather >= 0 && weather < 10) {
//   console.log("cold");
// } else if (weather >= 10 && weather < 20) {
//   console.log("mild");
// } else if(weather > 20) {
//   console.log("hot");
// } else{
//     console.log('freezing...');
// }

//task 2
// let message = "html, css, js, git, react, node";
// let wordCounter = 1;
// for (let i = 0; i < message.length; i++) {
//   if (message[i] == ",") {
//     wordCounter++;
//   }
// }
// console.log(wordCounter);

//objects
let hezret = {
  fullName: "Hezret Kerimzade",
  age: 17,
  GPA: 36,
  major: "front-end development",
  knowledge: ["git", "github", "js"],
  academy: "code academy",
  isMale: true,
};
let rashad = {
  fullName: "Rashad Ferhadli",
  age: 20,
  GPA: 45.5,
  major: "front-end development",
  knowledge: ["git", "github", "js", "node"],
  academy: "code academy",
  isMale: true,
};
let gunel = {
  fullName: "Gunel Shukurova",
  age: 22,
  GPA: 92,
  major: "front-end development",
  knowledge: ["git", "github"],
  academy: "code academy",
  isMale: false,
};
let teymur = {
  fullName: "Teymur Sultanov",
  age: 28,
  GPA: 95.5,
  major: "back-end development",
  knowledge: ["git", "github", "C#"],
  academy: "code academy",
  isMale: true,
};

let students = [hezret, rashad, gunel, teymur]; //array

// for (let index = 0; index < students.length; index++) {
//   const currentStudent = students[index];
//   //1 - back-end student list
//   //   if (currentStudent.major == "front-end development") {
//   //     console.log(currentStudent.fullName);
//   //   }

//   //2 - kesilen telebeler
//   //   if(currentStudent.GPA > 50){
//   //     console.log(currentStudent.fullName);
//   //   }

//   //3 - kishi cinsinden olanlarin fullName ?
//   //   if(!currentStudent.isMale){
//   //     console.log(currentStudent.fullName);
//   //   }
// }

//? - 5
// for (let i = 0; i < 5; i++) {
//   //? - 4
//   for (let j = 0; j < 5; j++) {
//     console.log("hello");
//   }
// }
//i = 0 => 5
//i = 1 => 5
//i = 2 => 5
//i = 3 => 5
//i = 4 => 5

//iteration count => 25

// let numbers = [1, 4, 62, 12, 35, 67, 22, 18]; //find maximum
// let minNumber = numbers[0]; //67

// console.log(Math.min(...numbers));

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] < minNumber){
//         minNumber = numbers[index];
//     }
// }

// console.log(minNumber);

// let weekDay = 5;

// switch (weekDay) {
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
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//   case 7:
//     console.log("weekend");
//     break;
//   default:
//     console.log("invalid input!");
//     break;
// }

// let num = 4; //factorial => 1*2*3*4*5*6
// let factorial = 1;
// //code
// for (let i = 1; i <= num; i++) {
//   factorial = factorial * i;
// }

// console.log(factorial);


// let text = 'javascript'; //=> tpircsavaj
// let reversedText = '';
// for (let i = text.length - 1; i >= 0; i--) {
//     reversedText = reversedText + text[i];
// }
// console.log(reversedText);

