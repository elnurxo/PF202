import { renderCityDetail } from "../helpers/renderCityDetail.js";
import { getOneCity } from "../services/cityService.js";

document.addEventListener("DOMContentLoaded", async () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const { ok, data: city } = await getOneCity(id);
  if (ok) {
    renderCityDetail(city);
  } else {
    window.location.replace("index.html");
  }
});
