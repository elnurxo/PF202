// // BOM - Browser Object Model - window

// // alert, prompt, confirm
// // window.alert('hey');
// // window.confirm('are you older than 18?');
// // window.prompt("enter your name: ");

// // let counter = 0;
// // window.setInterval(function () {
// //   counter++;
// //   console.log(counter);
// // }, 1000); //1s - 1000ms

// const startBtn = document.querySelector("#start");
// const pauseBtn = document.querySelector("#pause");
// const resetBtn = document.querySelector("#reset");
// const inp = document.querySelector("input");
// const timerSpan = document.querySelector("#timer");

// // let timer = 0;
// let intervalId = null;
// let countDown = null;
// startBtn.addEventListener("click", function () {
//   countDown = Number(inp.value);
//   this.disabled = true;
//   //   this.setAttribute("disabled","true");
//   inp.value = "";
//   intervalId = setInterval(() => {
//     if (countDown === 0) {
//       const audio = new Audio("./media/mixkit-classic-alarm-995.wav");
//       audio.play();
//       this.disabled = false;
//       clearInterval(intervalId);
//       return;
//     }
//     timerSpan.textContent = countDown;
//     countDown--;
//   }, 1000);
// });
// pauseBtn.addEventListener("click", function () {
//   window.clearInterval(intervalId);
// });
// resetBtn.addEventListener("click", function () {
//   timerSpan.textContent = 0;
//   countDown = 0;
// });

// const timeoutId = window.setTimeout(() => {
//   console.log("time out!");
// }, 3000); //3s

// // const stopTimeOut = document.querySelector("#stop-timeout");
// // stopTimeOut.addEventListener("click", function () {
// //   clearTimeout(timeoutId);
// // });

// const time = document.querySelector("#time");
// setInterval(() => {
//   time.textContent = new Date().toTimeString();
// }, 1000);

// // window.addEventListener("focus", () => {
// //   console.log("User is online");
// // });
// // window.addEventListener("blur", () => {
// //   console.log("User is offline");
// // });

// const reloadBtn = document.querySelector("#reload");
// reloadBtn.addEventListener("click", function () {
//   console.log(location.href);
// const id = new URLSearchParams(window.location.search).get("id");
// console.log(id);
// location.reload();  //replace
// window.close();
// });

// console.log(navigator.getBattery().then((x)=>{
//     console.log(x);
// }));

// console.log(navigator.deviceMemory);

// let screen = 4;
// console.log(screen); //width, height, color depth

// const backBtn = document.querySelector("#back");
// const forwardBtn = document.querySelector("#forward");

// backBtn.addEventListener("click", function () {
//   history.go(-1);
// });
// forwardBtn.addEventListener("click", function () {
//   history.go(1);
// });

// window.fetch();
// window.localStorage



// window (alert, prompt, confirm) => BOM
// window => close(), open(), replace()

// setInterval, setTimeOut (async function) - Event Loop

// screen (availWidth vs width), history, location, navigator => BOM (fields, methods)
