// let numbers = [1, 2, 3, 4, 5, 6];
// let grades = [55.5, 76, 99, 100, 45, 30, 88];

//length
// console.log(capitals.length); //? - 5
// console.log(numbers.toString());
// console.log(numbers.at(0)); //? - numbers[0] => 1
// console.log(numbers.join("*")); //? - 1*2*3*4*5*6 string
// console.log('hello'.split('')); ['h','e','l','l','o'];

//POP, PUSH, SHIFT, UNSHIFT
// numbers.push(7, 8, 9); //adds element to the end of array
// numbers.pop();
// numbers.unshift(-1, 0);
// numbers.shift();
// console.log(numbers.at(0));

// delete numbers[0];
// console.log(numbers);

// let boys = ["john", "adam"];
// let girls = ["ann", "beck"];

// let kids = boys.concat(girls, ["scoopy-doo"]);
// console.log(girls);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.copyWithin(1, 0, 2));

// const multiDimensionalArray = [1, [1, [3, 4]], 3];

// console.log(multiDimensionalArray.flat(2));

// console.log(numbers);
// const slicedArr = numbers.slice(3);
// console.log(numbers);

//SPLICE - DELETE FROM SPECIFIC INDEX, ADD
// const deletedElement = numbers.splice();
// console.log(numbers);

// let capitals = ["Baku", "Ankara", "Moscow", "Berlin", "Rome"];
// capitals.splice(2, 0, "Paris");
// capitals.splice(5, 0, "London");
// capitals.splice(1, 2);
// capitals.push('Ankara');
// const splicedArr = capitals.toSpliced(2, 1);
// console.log(capitals);
// console.log(splicedArr);

// let grades = [55.5, 76, 99, 100, 45, 30, 88];

// const sortedGrades = grades.toSorted(function (x, y) {
//   return y - x;
// });

// console.log(sortedGrades);

// let capitals = ["Baku", "Ankara", "Moscow", "Zimbabwe", "Berlin", "Rome"];

// const sortedCapitals = capitals.toSorted(function (capital1, capital2) {
//   return capital2.toLowerCase().localeCompare(capital1.toLowerCase());
// });

// console.log(sortedCapitals);

// let numbers = [1, 2, 3, 4, 5, 6];

// const reveredArr = numbers.toReversed();

// console.log(reveredArr);

// const students = [
//   {
//     name: "Charlie Davis",
//     age: 21,
//     grade: "C",
//     major: "Business Administration",
//     gender: "Male",
//   },
//   {
//     name: "Bob Smith",
//     age: 20,
//     grade: "B",
//     major: "Mechanical Engineering",
//     gender: "Male",
//   },
//   {
//     name: "Ethan Brown",
//     age: 18,
//     grade: "B",
//     major: "Mathematics",
//     gender: "Male",
//   },
//   {
//     name: "Julia Adams",
//     age: 22,
//     grade: "B",
//     major: "English Literature",
//     gender: "Female",
//   },
//   {
//     name: "Fiona Black",
//     age: 23,
//     grade: "A",
//     major: "Physics",
//     gender: "Female",
//   },
//   {
//     name: "Alice Johnson",
//     age: 19,
//     grade: "A",
//     major: "Computer Science",
//     gender: "Female",
//   },
//   {
//     name: "George Green",
//     age: 20,
//     grade: "C",
//     major: "History",
//     gender: "Male",
//   },
//   {
//     name: "Hannah Lee",
//     age: 19,
//     grade: "B",
//     major: "Psychology",
//     gender: "Female",
//   },
//   {
//     name: "Isaac Miller",
//     age: 21,
//     grade: "A",
//     major: "Economics",
//     gender: "Male",
//   },
//   {
//     name: "Diana White",
//     age: 22,
//     grade: "A",
//     major: "Biology",
//     gender: "Female",
//   },
// ];

// students.pop();
// students.splice(4,1);
// console.log(students);
// students.sort((stu1, stu2) => stu1.grade.localeCompare(stu2.grade));

// console.log(students);

// let numbers = [34, 12, 13, 21, 9, 5];

// console.log(Math.min(...numbers));

// let number = 37;

// console.log(Math.ceil(number));

// console.log(Math.PI.toFixed(2));
// console.log(Math.pow(5, 3));
// console.log(Math.sqrt(81));

// let randomNumber = parseInt(Math.random() * 10000);
// console.log(randomNumber)

// const currentDate = new Date();
// currentDate.setHours(13);
// console.log(currentDate);

//date formats
// console.log(currentDate.toDateString());
// console.log(currentDate.toISOString());
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toLocaleString());
// console.log(currentDate.toLocaleTimeString());



// console.log(currentDate.getFullYear()); //il
// console.log(currentDate.getDate()); //ayin gunu
// console.log(currentDate.getDay()); //heftenin gunu
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getMonth() + 1);
// // console.log(currentDate.getUTCHours());
// console.log(currentDate.getTime());

const birthMonth = 3; // December (0-based index)
const birthDay = 12;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// Set next birthday's date
let nextBirthday = new Date(currentYear, birthMonth, birthDay);

// If birthday already passed this year, set for next year
if (nextBirthday < currentDate) {
    nextBirthday = new Date(currentYear + 1, birthMonth, birthDay);
}

// Calculate time difference
const timeDiff = nextBirthday - currentDate;

// Convert to days, hours, minutes, seconds
const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
const seconds = Math.floor((timeDiff / 1000) % 60);

console.log(`Time until next birthday: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

