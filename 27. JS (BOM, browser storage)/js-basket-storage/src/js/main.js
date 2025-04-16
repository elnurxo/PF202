import { products } from "./data/index.js";
import { renderProducts } from "./helpers/renderProducts.js";

document.addEventListener("DOMContentLoaded", function () {
  // if not basket in local create
  if (!JSON.parse(localStorage.getItem("basket"))) {
    localStorage.setItem("basket", JSON.stringify([]));
  }

  renderProducts(products);
});
