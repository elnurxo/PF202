// modal with JS and TailwindCSS
const openModalBtn = document.querySelector("#openModalBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modal = document.querySelector(".modal");

openModalBtn.addEventListener("click", function () {
  modal.classList.add("open");
});
closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("open");
});
document.body.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.classList.remove("open");
  }
});
