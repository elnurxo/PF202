const addForm = document.querySelector("#add-actor");
const actorInput = document.querySelector("#actor-inp");
const actorList = document.querySelector("#actors");
const errorMessage = document.querySelector(".error-message");
const addButton = document.querySelector("#add-btn");

let actors = JSON.parse(localStorage.getItem("favorites")) || [];
var notyf = new Notyf({
  duration: 1500,
  position: {
    x: "right",
    y: "top",
  },
});

//document load - if not favorites create on Local []
document.addEventListener("DOMContentLoaded", function () {
  if (!JSON.parse(localStorage.getItem("favorites"))) {
    //create empty favorites
    localStorage.setItem("favorites", JSON.stringify([]));
  } else {
    //local favorites var
    const storedActors = JSON.parse(localStorage.getItem("favorites"));
    renderList(storedActors);
  }

  //detect initial language
  if (!JSON.parse(localStorage.getItem("language"))) {
    localStorage.setItem("language", "en"); // default language is english
  } else {
    const storedLanguage = JSON.parse(localStorage.getItem("language"));
    renderLanguage(storedLanguage);
    const languageSelect = document.querySelector("#language");
    languageSelect.value = storedLanguage;
  }
});

//input keyup - validation
actorInput.addEventListener("keyup", function (e) {
  const actorName = e.target.value.trim();
  validateForm(actorName);
});

//form submit - add new actor
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const actorName = actorInput.value.trim();
  resetForm();
  notyf.success(`${actorName} added to list!`);
  actors.push(actorName); // ["Leonardo Dicaprio"]
  renderList(actors);
  addButton.disabled = true;
  addButton.classList.replace("bg-neutral-700", "bg-red-700");
});

//helper functions
function validateForm(actorName) {
  if (actorName.length >= 3) {
    //ok
    errorMessage.classList.replace("block", "hidden");
    actorInput.classList.replace("border-red-500", "border-gray-500");
    actorInput.classList.remove("outline-red-500");
    addButton.classList.replace("bg-red-700", "bg-neutral-700");
    addButton.disabled = false;
  } else {
    //not ok
    errorMessage.classList.replace("hidden", "block");
    actorInput.classList.replace("border-gray-500", "border-red-500");
    actorInput.classList.add("outline-red-500");
    addButton.classList.replace("bg-neutral-700", "bg-red-700");
    addButton.disabled = true;
  }
}
function resetForm() {
  actorInput.value = "";
}
function renderList(arr) {
  actorList.innerHTML = "";

  // Fetch the favorites list from localStorage
  const storedActors = JSON.parse(localStorage.getItem("favorites")) || [];

  // Loop through the actors list and display them
  arr.forEach((actor) => {
    // Check if the actor is in the favorites list
    const isFavorite = storedActors.includes(actor);

    // Render the actor with the appropriate star icon
    actorList.innerHTML += `
      <li class="mb-2 flex justify-between w-full py-4 bg-gray-100 px-6 rounded hover:shadow-md transition cursor-pointer">
        <span id="actor-name">${actor}</span>
        <button data-name="${actor}" class="favorite cursor-pointer hover:scale-95 transition">
          <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-star ${
      isFavorite ? "text-yellow-500" : ""
    }"></i>
        </button>
      </li>
    `;
  });

  // Get all the favorite buttons and add event listeners
  const favoriteButtons = document.querySelectorAll(".favorite");
  favoriteButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const actorName = this.getAttribute("data-name");
      const storedActors = JSON.parse(localStorage.getItem("favorites")) || [];

      if (storedActors.find((x) => x === actorName)) {
        // Remove from favorites
        const updatedFavorites = storedActors.filter((x) => x !== actorName);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        notyf.success(`${actorName} removed from favorites!`);

        // Update the icon
        const icon = this.children[0];
        icon.classList.replace("fa-solid", "fa-regular");
        icon.classList.remove("text-yellow-500");
      } else {
        // Add to favorites
        storedActors.push(actorName);
        localStorage.setItem("favorites", JSON.stringify(storedActors));
        notyf.success(`${actorName} added to favorites!`);

        // Update the icon
        const icon = this.children[0];
        icon.classList.replace("fa-regular", "fa-solid");
        icon.classList.add("text-yellow-500");
      }
    });
  });
}
//changing language
const title = {
  en: "Favorite Actors app with LocalStorage",
  az: "LocalStorage ilə Sevimli Aktyorlar tətbiqi",
  ru: "Приложение Избранные Актёры с LocalStorage",
};
const text = {
  en: "This simple web app allows you to add, view, and manage a list of your favorite actors. It uses the browser's LocalStorage to save your data, so even if you refresh the page or close the browser.",
  az: "Bu sadə veb tətbiq sizə sevimli aktyorlar siyahısını əlavə etmək, baxmaq və idarə etmək imkanı verir. Brauzerin LocalStorage funksiyasından istifadə edərək məlumatlarınızı saxlayır, beləliklə səhifəni yeniləsəniz və ya brauzeri bağlasanız belə məlumatlar qalacaq.",
  ru: "Это простое веб-приложение позволяет добавлять, просматривать и управлять списком ваших любимых актёров. Оно использует LocalStorage браузера для сохранения данных, поэтому даже если вы обновите страницу или закроете браузер, данные сохранятся.",
};
const langSelect = document.querySelector("#language");
const titleElement = document.querySelector(".title");
const descElement = document.querySelector(".desc");

langSelect.addEventListener("change", function (e) {
  localStorage.setItem("language", JSON.stringify(e.target.value));
  renderLanguage(e.target.value);
});

function renderLanguage(language) {
  switch (language) {
    case "az":
      titleElement.textContent = title.az;
      descElement.textContent = text.az;
      break;
    case "ru":
      titleElement.textContent = title.ru;
      descElement.textContent = text.ru;
      break;
    case "en":
      titleElement.textContent = title.en;
      descElement.textContent = text.en;
      break;

    default:
      notyf.error("invalid language!");
      break;
  }
}
