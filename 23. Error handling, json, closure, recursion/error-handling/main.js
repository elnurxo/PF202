// function test() {
//   try {
//     const x = 5;
//     x = 7;
//     window.alert(x);
//   } catch (err) {
//     document.body.textContent = err.message || "something went wrong!";
//     document.body.style.color = "red";
//     document.body.style.background = "black";
//   }
// }

// test();

// try {
//   let num = 5;
//   console.log(num.toUpperCase()); // This will throw an error
// } catch (error) {
//   console.error("An error occurred:", error.message);
// }

function divide(a, b) {
  if (b === 0) {
    throw new Error("cannot divide by zero!");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  window.alert(result);
} catch (error) {
  console.warn(error.message || "something went wrong!");
}
