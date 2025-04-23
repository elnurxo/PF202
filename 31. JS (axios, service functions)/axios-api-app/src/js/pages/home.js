import { renderCityCards } from "../helpers/renderCityCards.js";
import { getAllCities } from "../services/cityService.js";
import { Notyf } from "notyf";

//get all cities on page load
var toaster = new Notyf({
  duration: 1200,
  position: {
    x: "right",
    y: "top",
  },
});

document.addEventListener("DOMContentLoaded", async () => {
  const { data: cities, message } = await getAllCities();
  renderCityCards(cities);
  toaster.success(message);
});

//search
document.querySelector("#search").addEventListener("keyup", async (e) => {
  const { data: cities } = await getAllCities();
  const searchedCities = cities.filter(
    (c) =>
      c.name
        .trim()
        .toLowerCase()
        .includes(e.target.value.trim().toLowerCase()) ||
      c.country
        .trim()
        .toLowerCase()
        .includes(e.target.value.trim().toLowerCase())
  );
  console.log("cities: ", searchedCities);
  renderCityCards(searchedCities);
});
