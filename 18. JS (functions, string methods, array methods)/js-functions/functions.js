//regular function
function calculateAge(birthYear = 2000) {
  let currentYear = 2025; //new Date().getFullYear()
  return currentYear - birthYear;
}

let john = {
  fullName: "John Doe",
  birthYear: 1988,
  gender: "male",
};

// const johnAge = calculateAge(john.birthYear);
// console.log(johnAge);

//arrow function
const calculateAgeArrow = (birthYear = 2000) => 2025 - birthYear;

// console.log(calculateAgeArrow(2011));

//anonym function
const calculateAgeAnonym = function (birthYear = 2000) {
  //   return; //undefined
  return 2025 - birthYear;
};

console.log(calculateAgeAnonym(2004));
