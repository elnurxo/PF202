// REGEX - REGULAR EXPRESSION

//password -> min 8 symbol, min 1 digit, min 1 lower case, min 1 upper case, min 8 character
//car serial number -> 11-AA-111
//fin code -> 7 character (only letters and digits)
//email -> @gmail.com || @code.edu.az
//phone number -> +994-(55 | 50 | 77)-111-11-11

//regex pattern - FLAGS
// let pattern = /cat/g;
// let regex = new RegExp("w3schools");
//w3schools -> W3SCHOOLS -> W3schools

// let input = window.prompt("enter your word");
// if (pattern.test(input)) {
//   window.alert("pattern passed!");
// } else {
//   window.alert("invalid input");
// }

// let str = "I love JavaScript! JavaScript is awesome";
// let regex = /javascript/gi;
// let newStr = str.replace(regex, "Regex");
// console.log(newStr); // "I love Regex!"

// let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,10}$/;

// if (emailRegex.test("admin@gmail.com")) {
//   console.log("valid email format!");
// } else {
//   console.warn("invalid email format!");
// }

// let phoneRegex =
//   /^\+?\d{1,3}?[-. ]?\(?[055|050|077|051|012]{3}?\)?[-. ]?\d{3}[-. ]?\d{2}[-. ]?\d{2}$/;

// console.log(phoneRegex.test("+994 (055) 456-78-90"));

//VALIDATIONS
// const carRegex = /^(99|90|10|77)-[A-Z]{2}-\d{3}$/;

// console.log(carRegex.test('77-AA-777')); //true
// console.log(carRegex.test('41-CD-777')); //false
// console.log(carRegex.test('77-AA-7772')); //false
// console.log(carRegex.test('77-az-771')); //false

//Password regex, min 6 chars, min 1 digit, min 1 lower case letter, min 1 uppercase, min 1 special char
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

console.log(passwordRegex.test('admin123')); //false
console.log(passwordRegex.test('Admin123')); //false
console.log(passwordRegex.test('admin123!')); //false
console.log(passwordRegex.test('Admin123!')); //true
console.log(passwordRegex.test('123A!')); //false