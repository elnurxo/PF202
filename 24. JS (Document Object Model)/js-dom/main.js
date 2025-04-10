// JS DOM - JS Document (HTML) Object Model
// NodeList VS HTMLCollection

// get by id (first match)
// const menuList = document.getElementById("menu");

// // get by name (multiple) -> NodeList []
// const inputs = document.getElementsByName("surname"); //Array.from(...);

// // get by tag name (multiple) -> HTMLCollection []
// const texts = document.getElementsByTagName("p");

// // get by class name (multiple) -> HTMLCollection []
// const textParagraph = document.getElementsByClassName("text");

// // query Selector (single) - first match (CSS selectors)
// const listItem = document.querySelector("ul li");

// // query Selector All (multiple) -> NodeList []
// const listItems = document.querySelectorAll("ul li"); //Array.from();

// console.log(listItems);

// const searchInput = document.querySelector("#search");
// const surnameInput = document.querySelector("#surname");

// -----------------------------------------------------------------
// SECTION 2 - Traversing Elements (child, parent siblings)
// const menuList = document.querySelector("#menu");

//NODE
// console.log(menuList.parentElement);

// const heyBtn = document.querySelector(".hey");
// console.log(heyBtn.closest(".box"));

//children
// const menuList = document.querySelector("#menu");

//children -> HTMLCollection [] => Array.from() => methods
// console.log(menuList.children);

// const searchInput = document.querySelector("#search");

// console.log(searchInput.previousElementSibling);

// console.log(searchInput.nextElementSibling.nextElementSibling.children[1]);

//---------------------------------------------------------
// Manipulating Elements
// const websiteTitle = document.createElement("h1");
// websiteTitle.innerHTML = `<a href="https://google.com">google</a>`;
// const button = document.createElement("button");
// button.textContent = "click me!";

// //first (append, appendChild, prepend, textContent, innerText, innerHTML)
// document.body.append(websiteTitle, button);

// homework research - DocumentFragment, insertAdjacentHTML(), replaceChild(), cloneNode(), removeChild()
// getComputedStyle()

//-------------------------------------------------------------------------------------
// Working with Attributes
// const input = document.querySelector("input");

//set attribute
// input.setAttribute("placeholder", "enter your surname...");

// get attribute
// console.log(input.getAttribute("type")); //null ? text
// const googleLink = document.querySelector('a');
// console.log(googleLink.getAttribute("href"));

// const btn = document.querySelector("button");
// btn.setAttribute("disabled", "true");

// // remove attribute
// btn.removeAttribute("disabled");

// const googleLink = document.querySelector("a");

// console.log(googleLink.hasAttribute("href"));

// googleLink.setAttribute('id','link');
// googleLink.id = 'link test';

// googleLink.setAttribute("target", "_blank");
// googleLink.setAttribute("href","https:youtube.com");

// //innerText, innerHTML -, textContent
// googleLink.textContent = 'youtube';

// ---------------------------------------------------------
// Manipulating Element’s Styles
// const title = document.querySelector("#title");

// title.style.color = "red";
// title.style.backgroundColor = "brown";

// const btn = document.querySelector('button');
// btn.style.padding = '12px 18px';
// btn.style.paddingTop = '50px';

const box = document.createElement("div");
box.classList.add("box");
// box.setAttribute('class','box title header');
// box.className = 'box title header';

// box.classList.add("box", "header");
// box.classList.remove("header");
// console.log(box.classList.contains('footer'));
// console.log(box.classList.replace('box','red-box'));
// box.classList.toggle("footer");

// if (box.classList.contains("footer")) {
//   box.classList.remove("footer");
// } else {
//   box.classList.add("footer");
// }

//DYNAMIC
// box.style.height = "100px";
// box.style.width = "100px";
// box.style.border = "1px solid black";
// box.style.backgroundColor = "red";
// box.style.margin = "0 auto";

// box.addEventListener("click", function () {
//   box.classList.toggle("active");
// });

// document.body.append(box);

const btn = document.querySelector("#btn");
const list = document.querySelector("#numbers");

btn.addEventListener("click", function () {
  const listItem = document.createElement("li");
  const randomNumber = Math.floor(Math.random() * 100);
  listItem.textContent = randomNumber;
  list.append(listItem);
});

//mode button
const modeButton = document.querySelector("#mode");

modeButton.addEventListener("click", function () {
  const currentMode = this.getAttribute("data-mode");
  if (currentMode === "light") {
    this.setAttribute("data-mode", "dark");
    //switch to dark mode
    document.body.style.background = "black";
    document.body.style.color = "white";
    this.textContent = "switch to light mode";
    this.style.background = "white";
    this.style.color = "black";
  } else {
    this.setAttribute("data-mode", "light");
    //switch to light mode
    document.body.style.background = "white";
    document.body.style.color = "black";
    this.textContent = "switch to dark mode";
    this.style.background = "black";
    this.style.color = "white";
  }
});
