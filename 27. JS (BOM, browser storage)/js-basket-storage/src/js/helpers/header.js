const headerBasketCount = document.querySelector("#basket-length");
import { Basket } from "../classes/basket.class.js";

document.addEventListener("DOMContentLoaded", function () {
  const basketItems = new Basket();
  headerBasketCount.textContent = basketItems.getBasketCount();
});
