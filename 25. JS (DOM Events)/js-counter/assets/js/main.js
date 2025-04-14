import { Counter } from "./class.js";

const incrementButton = document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");
const resetButton = document.querySelector(".reset");
const counterSpan = document.querySelector("#counter");

//helper function
function renderCounter() {
  counterSpan.textContent = counterApp.counter;
}

// initialize new counter object via Counter Class
const counterApp = new Counter(); // {counter: 0}, increment, decrement, reset

document.addEventListener("DOMContentLoaded", function () {
  renderCounter();
});

//increment
incrementButton.addEventListener("click", function () {
  counterApp.increment();
  renderCounter();
  //check if greater than zero
  if (counterApp.counter > 0) {
    decrementButton.removeAttribute("disabled", "true");
    decrementButton.classList.replace(
      "btn-outline-danger",
      "btn-outline-primary"
    );
  }
});

//decrement
decrementButton.addEventListener("click", function () {
  counterApp.decrement();
  renderCounter();
  //check if less than zero
  if (counterApp.counter == 0) {
    this.setAttribute("disabled", "true");
    this.classList.replace("btn-outline-primary", "btn-outline-danger");
  }
});

//reset
resetButton.addEventListener("click", function () {
  counterApp.reset();
  renderCounter();
});
