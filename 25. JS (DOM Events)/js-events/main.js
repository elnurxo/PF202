// // JS events

// // Mouse Events -> click, double click, scroll, context menu,
// // mouseEnter, mouseLeave, mouseMove, mouseUp, mouseDown

// // Keyboard Events -> keyup, keydown, keypress(deprecate)

// // Form Events -> submit, reset, focus, blur, change

// // Window, Document Events -> load, unload, resize, reset, scroll, DomContentLoaded

// const btn = document.querySelector("#btn"); //single

// btn.addEventListener("click", function (event) {
//   //   this.style.background = 'red';
//   const { target } = event; //object destruction
//   console.log(target);
// });
// btn.addEventListener("dblclick", function (event) {
//   //   this.style.background = 'red';
//   const { target } = event; //object destruction
//   console.log(target);
// });
// btn.addEventListener("mousedown", function () {
//   this.style.scale = 0.9;
// });
// btn.addEventListener("mouseup", function () {
//   this.style.scale = 1;
// });
// const box = document.querySelector(".box"); //single
// box.addEventListener("mouseenter", function () {
//   console.log("hello");
//   this.style.background = "gold";
// });
// box.addEventListener("mouseleave", function () {
//   console.log("goodbye");
//   this.style.background = "transparent";
// });
// box.addEventListener("mousemove", function (e) {
//   console.log(e.clientX);
//   console.log(e.clientY);
// });

// window.addEventListener("scroll", function () {
//   if (this.window.scrollY > 150) {
//     document.body.style.background = "red";
//   } else {
//     document.body.style.background = "transparent";
//   }
// });

// window.addEventListener("contextmenu", function (event) {
//   //methods
//   event.preventDefault(); //prevents default browser behavior
//   //   this.alert('hey there');
//   //   console.log(event.clientX);
//   //   console.log(event.clientY);
//   console.log("hey context menu");
// });

// // Keyboard Events -> keyup, keydown, keypress(deprecate)
// const inp = document.querySelector("#search");

// // inp.addEventListener("keyup", function (ev) {
// //   if (ev.key === "Enter") {
// //     window.alert("enter clicked!");
// //   }
// //   console.log(ev.target.value);
// // });

// // const check = document.querySelector("#accept");

// // document.querySelector("select").addEventListener("change", function (e) {
// //   console.log(e.target.value);
// // });

// // Window, Document Events -> load, unload, resize, reset, scroll, DomContentLoaded

// // document.addEventListener("DOMContentLoaded", function () {
// //   alert('dom content loaded');
// // });

// // Form Events -> submit, reset, focus, blur, change
// const form = document.querySelector("form");

// form.addEventListener("blur", function (event) {
//   //browser form submit auto refresh
//   event.preventDefault();
//   alert("🚀🍔 FORM CANCELED!");
// });

const box = document.querySelector(".box");
const innerBox = document.querySelector(".inner-box");
const childBox = document.querySelector(".child-box");

// JS event FLOW - Bubbling, Capturing +
box.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("BOX CLICKED: RED");
});
innerBox.addEventListener("click", function (e) {
  console.log(e.defaultPrevented);
  e.stopPropagation();
  console.log("INNER BOX CLICKED: BLUE");
});
childBox.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("CHILD BOX CLICKED: GREEN");
});
