const bars = document.querySelector("#bars");
const firstBar = document.querySelector("#first-bar");
const secondBar = document.querySelector("#second-bar");
const thirdBar = document.querySelector("#third-bar");
const sideBar = document.querySelector(".sidebar");

bars.addEventListener("click", function () {
  //opening
  if (sideBar.classList.contains("-translate-x-[-400px]")) {
    firstBar.style.transform = `rotate(45deg)`;
    secondBar.style.width = "0px";
    thirdBar.style.transform = `rotate(-45deg)`;
    firstBar.style.position = "absolute";
    thirdBar.style.position = "absolute";
    firstBar.style.transformOrigin = "center";
    firstBar.style.top = "50%";
    thirdBar.style.transformOrigin = "center";
    thirdBar.style.top = "50%";
  } else {
    firstBar.style.transform = `rotate(0deg)`;
    secondBar.style.width = "30px";
    thirdBar.style.transform = `rotate(0deg)`;
  }
  sideBar.classList.toggle("-translate-x-[-400px]");
});
