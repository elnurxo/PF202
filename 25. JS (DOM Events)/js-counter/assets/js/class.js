export class Counter {
  counter;
  constructor(counter = 0) {
    this.counter = counter;
  }

  //methods
  increment(quantity = 1) {
    this.counter += quantity;
  }
  decrement(quantity = 1) {
    if (this.counter - quantity >= 0) {
      this.counter -= quantity;
    } else {
      alert("cannot be less than zero!");
    }
  }
  reset() {
    this.counter = 0;
  }
}
