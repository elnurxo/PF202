//slider with tailwind and JS
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const sliderTracker = document.querySelector(".slider-tracker"); //parent (transform)
const sliderItems = document.querySelectorAll(".slider-item"); //5 slide

let currentIndex = 0;
function updateSlider() {
  const offset = -currentIndex * 100;
  sliderTracker.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener("click", function () {
  currentIndex = currentIndex === sliderItems.length - 1 ? 0 : currentIndex + 1;
  updateSlider();
});
prevButton.addEventListener("click", function () {
  currentIndex = currentIndex === 0 ? sliderItems.length - 1 : currentIndex - 1;
  updateSlider();
});
