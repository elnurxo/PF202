// let planet = "mars";
// let message = "hello world world!";
// let language = "  french  ";

// //STRING METHODS - BASIC methods
// console.log("length: ", planet.length); //? - 4
// console.log("char at: ", planet.charAt(0)); //? - m  => planet[0]
// console.log("[0]", planet[0]);
// console.log("char code at: ", planet.charCodeAt(0)); //? - ASCII
// console.log("at: ", planet.at(0)); //? - m
// console.log("slice: ", planet.slice(1)); //? - ars (does not change og string)
// console.log("substring: ", planet.substring(0, 2)); //? - ma (does not change og string)
// console.log("substr: ", planet.substr(1, 3)); //? - (does not change og string)
// console.log("to upper case: ", planet.toLocaleUpperCase());
// console.log("to lower case: ", planet.toLocaleLowerCase());
// console.log("hello" + " " + "mars");
// console.log("hello".concat(" ", "mars")); //concat

// console.log(language.trim().length); //? - 6
// console.log(language.trimStart().length); //? - 8
// console.log(language.trimEnd().length); //? - 8

// console.log(planet.padEnd(planet.length + 4, "-")); //? - marsxx
// console.log(planet.padStart(6, "x")); //? - xxmars

// console.log(planet.repeat(4));
// console.log(message.replaceAll("world", "mars")); //? - hello mars world!

// console.log("apple".split(""));

// let country = "azerbaijan";
// let message = "hey Jane, what is up?";
// let phone = "apple iPhone 16 PRO max";

//console.log(message.indexOf("Bob")); //? - (-1)
// console.log(country.lastIndexOf('a'));

// let text = "Please locate where locate occurs!";
// console.log(text.search(/locate/));
// console.log(text.includes("where"));

// let website = "https://turbo.az";
// console.log(website.startsWith("https"));
// console.log(website.endsWith(".com"));

// let text2 = "The rain in SPAIN stays mainly in the plain";
// console.log(text2.match("ain"));

// window.alert("hey Tahir!");
// const age = window.prompt("how old are you?"); //STRING DATA TYPE
// window.alert(`your age will be ${+age + 1} next year!`);
// console.log(window.confirm("are you older than 18?"));

// if (window.confirm("are you older than 18?")) {
//   console.log("welcome");
// } else {
//   window.alert("access denied!");
// }

let products = [
  "iPhone 13",
  "iPhone 14 pro max",
  "samsung galaxy 21",
  "google pixels",
  "iPhone 16 pro",
  "xiaomi note 9 pro",
  "nokia",
  "vertu",
  "blackberry",
  "samsung note 9",
];

const searchQuery = window.prompt("search for a product...");

for (let i = 0; i < products.length; i++) {
  if (
    products[i].toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
  ) {
    console.log("product found: ", products[i]);
  }
}
