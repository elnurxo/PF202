// web storage is NOT DB (Database!)

// web storage => web browser storage
// localStorage, sessionStorage, cookie --- indexedDB, cache, extensionStorage

// localStorage vs sessionStorage (4-5)
// examples: dark mode, language, user data (login), basket (loginsiz), favorites (loginsiz)

// session Storage - (till tab is closed)
const btn = document.querySelector("button");
const numElement = document.querySelector("#num");

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random(100) * 1000); //404
  // sessionStorage - setItem, getItem, removeItem, clear (all), length
  window.localStorage.setItem("randomNumber", JSON.stringify(randomNumber));
  numElement.textContent = randomNumber;
});

document.addEventListener("DOMContentLoaded", function () {
  const storedRandomNumber =
    JSON.parse(window.localStorage.getItem("randomNumber")) ||
    "not number in storage!";
  numElement.textContent = storedRandomNumber;
});

// window.sessionStorage.setItem("x", JSON.stringify(10));
// window.sessionStorage.setItem("y", JSON.stringify(15));
// window.sessionStorage.removeItem('y'); //remove one by key
// window.sessionStorage.clear();
// window.sessionStorage.getItem('x'); JSON.parse(...)

//local Storage
// window.localStorage.setItem('x', JSON.stringify(10));
// localStorage.getItem('x');
// localStorage.removeItem('x');
// localStorage.clear();
// localStorage.key(1);
// localStorage.length;

// sessionStorage - setItem(key, value), getItem, clear, removeItem(key), key(idx), length

//cookie - expire (Session)
// document.cookie = "user=John; path=/; expires=Tue, 16 Apr 2025 16:20:00 GMT";
