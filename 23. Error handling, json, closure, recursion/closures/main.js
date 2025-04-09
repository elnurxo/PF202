console.log("JS Closures!");

function counter() {
  let count = 0; 

  return function () {
    count++; // CLOSURES
    return count;
  };
}

const increaseCounter = counter();

increaseCounter(); // 1
increaseCounter(); // 2
increaseCounter(); // 3

console.log(increaseCounter()); //? - 4

