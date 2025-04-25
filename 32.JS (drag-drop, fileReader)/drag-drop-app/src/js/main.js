//drag-drop animal game
const animals = document.querySelectorAll(".animal");
const zones = document.querySelectorAll(".zone");
const toaster = new Notyf({
  duration: 1200,
  position: {
    x: "right",
    y: "top",
  },
});
animals.forEach((animal) => {
  //draggable elements
  animal.addEventListener("dragstart", function () {
    this.classList.add("dragging");
  });
  animal.addEventListener("dragend", function () {
    this.classList.remove("dragging");
    checkWin();
  });
});

zones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", function () {
    const accept = this.dataset.accept;
    const animalCard = document.querySelector(".dragging");
    const type = animalCard.dataset.type;

    if (accept === type) {
      zone.appendChild(animalCard);
    } else {
      animalCard.classList.replace("bg-white", "bg-red-200");
      animalCard.classList.add("animate__shakeX", "animate__animated");
      setTimeout(() => {
        animalCard.classList.replace("bg-red-200", "bg-white");
        animalCard.classList.remove("animate__shakeX", "animate__animated");
      }, 1000);
    }
  });
});

function checkWin() {
  const allZones = document.querySelectorAll(".zone");
  let total = 0;

  //3 zone - land, water, air
  allZones.forEach((zone) => {
    const accept = zone.dataset.accept; //land, water, air
    zone.querySelectorAll(".animal").forEach((a) => {
      if (a.dataset.type === accept) total++;
    });
  });

  if (total === animals.length) {
    setTimeout(() => {
      const end = Date.now() + 5 * 1000; //5s

      // go Buckeyes!
      const colors = ["#bb0000", "#ffffff"];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });

        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }, 200);
  }
}

//movie app file upload
const movieForm = document.querySelector("#movie-form");
const inputs = {
  file: document.querySelector("#file-input"),
  title: document.querySelector("#title"),
};
const submitBtn = document.querySelector("#movie-form button");
const cardsParent = document.querySelector(".cards");
const dropZone = document.querySelector(".drop-zone");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropZone.addEventListener("drop", function (e) {
  e.preventDefault();
  const dt = e.dataTransfer;
  const files = dt.files;
  const fileReader = new FileReader();
  fileReader.onload = function (file) {
    dropZone.style.backgroundImage = `url(${file.target.result})`;
    dropZone.style.backgroundPosition = "center";
    dropZone.style.backgroundSize = "cover";
  };
  fileReader.readAsDataURL(files[0]);
});

movieForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const file = inputs.file.files[0];

  //validations (size, type)
  const { type, size } = file; //object destruction
  if (!type.startsWith("image/")) {
    toaster.error("file format is incorrect!");
    return;
  }
  const megabytes = (size / (1024 * 1024)).toFixed(2);
  if (megabytes > 5) {
    toaster.error("file is too large!");
    return;
  }

  const fileReader = new FileReader();
  fileReader.onload = function (file) {
    cardsParent.innerHTML += `
         <div class="card cursor-pointer rounded-xl shadow-xl overflow-hidden">
        <img class="h-60 w-full object-cover"
          src=${file.target.result}
          alt="">
        <article class="bg-white py-4">
          <h1 class="text-center font-semibold text-xl">${inputs.title.value}</h1>
        </article>
      </div>
    `;
    inputs.file.value = "";
    inputs.title.value = "";
  };

  //read as data url
  fileReader.readAsDataURL(file);
});
