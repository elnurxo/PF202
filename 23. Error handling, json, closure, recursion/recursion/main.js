// RECURSION => function return itself

// recursive function
let num = 1;
function counter() {
  num++; //5
  if (num < 5) {
    return counter();
  }
}

// counter();
// console.log(num); //? - 5

function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const result = factorial(4);
console.log(result);

// 1 * 2 * 3 * 4
// 1 step - factorial(4) => 4 * factorial(3)
// 2 step - factorial(3) => 4 * 3 * factorial(2)
// 3 step - factorial(2) => 4 * 3 * 2 * factorial(1)
// 4 step - factorial(1) => 4 * 3 * 2 * 1 * 1 => 24
// 5 step - factorial(0) => 1
