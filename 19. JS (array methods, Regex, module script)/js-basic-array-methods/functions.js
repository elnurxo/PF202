// let costPrice = Number(window.prompt("enter product cost price: ")); //"salam" => NaN

// while (Number.isNaN(costPrice)) {
//   costPrice = Number(window.prompt("wrong format try again: "));
// }

// let salePrice = Number(window.prompt("enter product sale price: "));

// while (Number.isNaN(salePrice)) {
//   salePrice = Number(window.prompt("wrong format try again: "));
// }

// const profit = salePrice - costPrice;
// window.alert(`your profit is ${profit}`);

//regular
//arrow
//anonymous

//pure - outer variable, inner-local variable
// function naming => calculate, check, get, set
// parameters, arguments =>
// function declaration => parameters

function greetPerson(firstName = "guest") {
  console.log(`hello ${firstName}`);
}

const greetPersonAnonym = function (firstName = "guest") {
  console.log(`hi ${firstName}`);
};

const greetPersonArrow = (firstName = "guest") => {
  console.log(`hi ${firstName}`);
};

function checkElementInArray(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return true;
    }
  }
  return false;
}

checkElementInArray([1, 2, 3, 4, 5], 8);

// greetPersonAnonym('Johnathan');
// greetPerson('Elnur');
// greetPersonArrow('Beck');
