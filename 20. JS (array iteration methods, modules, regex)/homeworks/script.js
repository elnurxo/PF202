// JS tasks (array methods, callbacks, IIFE, HOF, Date object, Math object)

// 1.task - Array Modifier
function modifyArray(arr) {
  if (arr.length > 5) {
    arr.pop();
  } else {
    arr.push(11);
    arr.splice(0, 2);
  }

  return arr;
}

// console.log(modifyArray([1,2,3,4,5,6]));

// 2.task - sort and reverse
const sortAndReverse = function (arr) {
  arr.sort(function (num1, num2) {
    return num1 - num2;
  });

  return {
    sorted: arr,
    reversed: arr.toReversed(),
  };
};

// 3.task - find first & last odd numbers
function findOddNumbers(arr) {
  const firstOddNumber = arr.find(function (element) {
    return element % 2 === 1;
  });
  const lastOddNumber = arr.findLast(function (element) {
    return element % 2 === 1;
  });

  if (firstOddNumber && lastOddNumber) {
    return {
      firstOdd: firstOddNumber,
      lastOdd: lastOddNumber,
    };
  } else {
    return "No odd numbers found";
  }
}

// 4.task - date formatter
function formatDate() {
  return new Date().toLocaleDateString();
}

// 5.task - random number game
function guessNumber() {
  const userNumber = Number(window.prompt("enter your number between 1-10: "));
  const randomNumber = Math.floor(Math.random() * 10);

  if (userNumber == randomNumber) {
    window.alert("congrats, number is correct");
  } else {
    window.alert(`incorrect! number was ${randomNumber}`);
  }
}

// 6.task - even numbers finder
function findEvenNumbers(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}

// 7.task - HOF - array mapper
const applyOperation = (arr, callback) => {
  let emptyArray = [];
  for (let i = 0; i < arr.length; i++) {
    const squaredNumber = callback(arr[i]);
    emptyArray.push(squaredNumber);
  }
  return emptyArray;
};

// console.log(applyOperation([1, 2, 3, 4], (num) => Math.pow(num, 2)));

// 8.task - IIFE
(function () {
  console.log("HEY FUNCTION INVOKED!");
})();

// 9. task - find and replace
function replaceItem(arr, arrElement, replacedNumber) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arrElement) {
      arr[i] = replacedNumber;
    }
  }
  return arr;
}

// 10. task - random password generator
function generatePassword() {
  let password = "";
  let letters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 1; i <= 4; i++) {
    const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    password += randomLetter;
    randomNumber = Math.floor(Math.random() * 9);
    password += randomNumber;
  }

  return password;
}

// console.log(generatePassword());

// 11.task - employee management
let employees = [
    { name: 'Ali', salary: 2000, department: 'IT', experience: 3, isRemote: true },
    { name: 'Sara', salary: 2500, department: 'HR', experience: 5, isRemote: false },
    { name: 'John', salary: 3200, department: 'Finance', experience: 7, isRemote: true },
    { name: 'Emma', salary: 2800, department: 'Marketing', experience: 4, isRemote: false },
    { name: 'David', salary: 3500, department: 'IT', experience: 6, isRemote: true },
    { name: 'Sophia', salary: 2200, department: 'Sales', experience: 2, isRemote: false },
    { name: 'Michael', salary: 4000, department: 'Finance', experience: 8, isRemote: true },
    { name: 'Olivia', salary: 2700, department: 'Marketing', experience: 3, isRemote: false },
    { name: 'Ethan', salary: 2900, department: 'IT', experience: 5, isRemote: true },
    { name: 'Lucas', salary: 2400, department: 'HR', experience: 4, isRemote: false }
];

//a
function deleteEmployeeByName(arr, name){
    const idx = arr.findIndex((employee)=>{
        return employee.name.toLowerCase() == name.toLowerCase();
    });
    arr.splice(idx, 1);
    return arr;
}
//b
function updateEmployeeSalary(name, updatedSalary){
    const updatingEmployee = employees.find((employee)=>{
        return employee.name == name;
    });
    if(updatingEmployee){
        updatingEmployee.salary = updatedSalary;
        return employees;
    }
    else{
        return 'no such employee found!';
    }
}
//c
function findFirstITGuy(){
    return employees.find((employee)=>employee.department == 'IT');
}

// console.log(findFirstITGuy());
// console.log(updateEmployeeSalary('Emma',3800));
// console.log(deleteEmployeeByName(employees,'olivia'));
// console.log(deleteEmployeeByName(employees,'ali'));
