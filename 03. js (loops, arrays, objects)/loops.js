// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]; //array elements
// let capitals = ["Baku", "Ankara", "Moscow"];

// console.log(numbers.length); //? - 12
// console.log(capitals.length); //? - 3

// console.log(capitals[1]); //? - Ankara
// console.log(numbers[4]) //? - 50
// console.log(numbers[numbers.length - 1]); //? - last element

// const FRUITS = ["apple", "kiwi", "banana", "peach"];

// console.log(FRUITS[0]);
// console.log(FRUITS[FRUITS.length - 1]);
// console.log(FRUITS.length);

//loops
// for (let i = 1; i <= 5; i++) {
//   console.log("hello world!");
// }

// let sum = 1;
// for (let i = 1; i <= 10; i++) {
//   //   sum = sum + i; //? +=, -=, *=, /=, %=
//   sum *= i;
// }
// console.log(sum);

// let sumOfEven = 0;
// let sumOfOdd = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     sumOfEven += i;
//   } else {
//     sumOfOdd += i;
//   }
// }
// console.log(sumOfEven);
// console.log(sumOfOdd);

// let numbers = [12, 24, 56, 21, 7, 88, 17]; //? son index = 6, length = 7
// let sumOfNumbers = 0;
// let result = 1;

// for(let i = 0; i < numbers.length; i++){
//     sumOfNumbers = sumOfNumbers + numbers[i];
//     result = result * numbers[i];
// }

// console.log(sumOfNumbers);
// console.log(result);

// let fullName = "johnathan adams";
// let counter = 0;
// for (let i = 0; i < fullName.length; i++) {
//   if (fullName[i] == "a") {
//     counter++;
//   }
// }
// console.log(counter);

// let animals = ['bear','koala','zebra','bee','bat','cat'];

// for (let index = 0; index < animals.length; index++) {
//     if(animals[index][0] == 'b'){
//         console.log(animals[index]);
//     }
// }

let numbers = [12, 3, 45, 7, 19, 6, 99];
//2 reqemli ededlerin cemini hesablayin.
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 9 && numbers[index] < 100) {
    sum += numbers[index];
  }
}
console.log (sum)
