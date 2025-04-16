import { Basket } from "../classes/basket.class.js";

export function renderProducts(arr) {
  const productsWrapper = document.querySelector(".products-wrapper");
  productsWrapper.innerHTML = "";
  const basketApp = new Basket();
  arr.forEach((product) => {
    productsWrapper.innerHTML += `
        <div class="product-card border border-gray-300 rounded shadow hover:shadow-xl transition px-4 py-4 pb-6">
            <div class="flex gap-3 items-center">
              <h1 class="text-xl">Product Name: ${product.title}</h1>
              <p class="rounded-full w-3 h-3 bg-${product.color}-300"></p>
            </div>
            <h3 class="italic">Brand: ${product.brand}</h3>
            <p>size: ${product.size}</p>
            <p>price: ${product.price.toFixed(2)}$</p>
            <p class="${
              product.stockQuantity > 0 ? `bg-green-300` : "bg-red-400"
            } rounded my-2 p-1 text-center">${
      product.stockQuantity > 0
        ? `In Stock (${product.stockQuantity})`
        : "Out of Stock"
    }</p>
            <div class="flex justify-end gap-2.5">
              <button class="remove shadow px-4 py-2 cursor-pointer hover:scale-90 transition rounded bg-blue-500 text-white "
                title="remove"><i class="fa-solid fa-trash"></i></button>
              <button data-id="${product.id}" class="basket shadow px-4 py-2 ${
      product.stockQuantity > 0 ? "cursor-pointer" : "cursor-not-allowed"
    } hover:scale-90 transition rounded ${
      product.stockQuantity > 0 ? "bg-lime-500" : "bg-red-500"
    } text-white "
                title="basket"><i class="fa-solid fa-basket-shopping"></i></button>
            </div>
          </div>
        `;
  });

  const basketButtons = Array.from(document.querySelectorAll(".basket"));
  basketButtons.forEach((basketBtn) => {
    basketBtn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      const product = arr.find((x) => x.id == id);
      basketApp.addToBasket(product);
      console.log(product);
      console.log(basketApp.basketItems);
    });
  });
}
