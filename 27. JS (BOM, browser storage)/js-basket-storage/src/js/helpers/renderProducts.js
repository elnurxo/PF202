import { Basket } from "../classes/basket.class.js";
const headerBasketCount = document.querySelector("#basket-length");

export function renderProducts(arr) {
  const productsWrapper = document.querySelector(".products-wrapper");
  productsWrapper.innerHTML = "";
  const basketApp = new Basket();
  arr.forEach((product) => {
    productsWrapper.innerHTML += `
        <div class="product-card border border-gray-300 rounded-lg shadow hover:shadow-2xl transition p-4 pb-6 bg-white">
  <!-- Product Image -->
  <div class="w-full h-48 mb-4 rounded-md overflow-hidden">
    <img src="${product.imageURL}" alt="${
      product.title
    }" class="w-full h-full object-cover" />
  </div>

  <!-- Product Info -->
  <div class="flex items-center gap-3 mb-2">
    <h1 class="text-xl font-semibold">${product.title}</h1>
    <span class="inline-block w-3 h-3 rounded-full bg-${
      product.color
    }-300"></span>
  </div>

  <h3 class="text-gray-600 italic mb-1">Brand: ${product.brand}</h3>
  <p class="text-gray-700 mb-1">Size: ${product.size}</p>
  <p class="text-gray-700 mb-3">Price: ${product.price.toFixed(2)}$</p>

  <!-- Stock Status -->
  <p class="rounded my-2 p-2 text-center font-medium ${
    product.stockQuantity > 0
      ? "bg-green-300 text-green-900"
      : "bg-red-400 text-red-900"
  }">
    ${
      product.stockQuantity > 0
        ? `In Stock (${product.stockQuantity})`
        : "Out of Stock"
    }
  </p>

  <!-- Action Buttons -->
  <div class="flex justify-end gap-3 mt-4">
    <button
      class="remove flex items-center gap-2 shadow px-4 py-2 rounded bg-blue-500 text-white hover:scale-95 transition active:scale-90"
      title="Remove"
    >
      <i class="fa-solid fa-trash"></i>
    </button>
    <button
      data-id="${product.id}"
      class="basket flex items-center gap-2 shadow px-4 py-2 rounded text-white ${
        product.stockQuantity > 0
          ? "bg-lime-500 hover:bg-lime-600"
          : "bg-red-500"
      } hover:scale-95 transition active:scale-90 cursor-pointer"
      title="Add to Basket"
    >
      <i class="fa-solid fa-basket-shopping"></i>
    </button>
  </div>
</div>
        `;
  });

  const basketButtons = Array.from(document.querySelectorAll(".basket"));
  basketButtons.forEach((basketBtn) => {
    basketBtn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      const product = arr.find((x) => x.id == id);
      if (product.stockQuantity > 0) {
        var notyf = new Notyf({
          duration: 1500,
          position: {
            x: "right",
            y: "bottom",
          },
        });
        notyf.success(`${product.title} added to basket!`);
        basketApp.addToBasket(product);
        const basketItems = new Basket();
        headerBasketCount.textContent = basketItems.getBasketCount();
      } else {
        var notyf = new Notyf({
          duration: 1500,
          position: {
            x: "right",
            y: "bottom",
          },
        });
        notyf.error(`${product.title} is out of stock!`);
      }
    });
  });
}
