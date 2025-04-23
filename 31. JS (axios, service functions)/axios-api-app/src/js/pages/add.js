const addForm = document.querySelector("#city-form");
const submitBtn = document.querySelector("#add-btn");
import { Notyf } from "notyf";
import { postCity } from "../services/cityService.js";
const inputs = {
  cityName: document.querySelector("#city-name"),
  countryName: document.querySelector("#country-name"),
  flag: document.querySelector("#flag"),
  description: document.querySelector("#description"),
  isCapital: document.querySelector("#isCapital"),
};

const errors = {
  ["city-name"]: "city name is required",
  ["country-name"]: "country name is required",
  flag: "flag url is required",
  description: "description should be min 10 chars",
};

function updateSubmitButton() {
  const hasError = Object.values(errors).some((msg) => msg.trim() != "");
  submitBtn.disabled = hasError;
  if (hasError) {
    submitBtn.classList.add("disabled:bg-red-200");
    submitBtn.classList.add("disabled:cursor-not-allowed");
  } else {
    submitBtn.classList.remove("disabled:bg-red-200");
    submitBtn.classList.remove("disabled:cursor-not-allowed");
  }
}

//title validation
inputs.cityName.addEventListener("keyup", function (e) {
  const errorElement = document.querySelector(`#error-${this.id}`);
  if (e.target.value.trim() !== "") {
    //ok
    errors[this.id] = "";
    errorElement.textContent = "";
    this.classList.replace("border-red-500", "border-gray-200");
  } else {
    //not ok
    errors[this.id] = "city name is required";
    errorElement.textContent = errors[this.id];
    this.classList.replace("border-gray-200", "border-red-500");
  }
  updateSubmitButton();
});

//country validation
inputs.countryName.addEventListener("keyup", function (e) {
  const errorElement = document.querySelector(`#error-${this.id}`);
  if (e.target.value.trim() !== "") {
    //ok
    errors[this.id] = "";
    errorElement.textContent = "";
    this.classList.replace("border-red-500", "border-gray-200");
  } else {
    //not ok
    errors[this.id] = "city name is required";
    errorElement.textContent = errors[this.id];
    this.classList.replace("border-gray-200", "border-red-500");
  }
  updateSubmitButton();
});

//flag url validation
inputs.flag.addEventListener("keyup", function (e) {
  const errorElement = document.querySelector(`#error-${this.id}`);
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  if (urlRegex.test(e.target.value)) {
    //ok
    errors[this.id] = "";
    errorElement.textContent = "";
    this.classList.replace("border-red-500", "border-gray-200");
  } else {
    //not ok
    errors[this.id] = "flag should be valid url";
    errorElement.textContent = errors[this.id];
    this.classList.replace("border-gray-200", "border-red-500");
  }
  updateSubmitButton();
});

//description validation
inputs.description.addEventListener("keyup", function (e) {
  const errorElement = document.querySelector(`#error-${this.id}`);
  if (e.target.value.trim().length > 10) {
    //ok
    errors[this.id] = "";
    errorElement.textContent = "";
    this.classList.replace("border-red-500", "border-gray-200");
  } else {
    //not ok
    errors[this.id] = "description should be at least 10 characters";
    errorElement.textContent = errors[this.id];
    this.classList.replace("border-gray-200", "border-red-500");
  }
  updateSubmitButton();
});

var toaster = new Notyf({
  duration: 1200,
  position: {
    x: "right",
    y: "top",
  },
});
addForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const { message } = await postCity({
    name: inputs.cityName.value,
    country: inputs.countryName.value,
    flagURL: inputs.flag.value,
    description: inputs.description.value,
    isCapital: inputs.isCapital.checked,
  });
  toaster.success(message);
  setTimeout(() => {
    window.location.replace("index.html");
  }, 1200);
});
