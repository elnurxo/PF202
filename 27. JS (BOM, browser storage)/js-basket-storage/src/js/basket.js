import { Basket } from "./classes/basket.class.js";
import { products } from "./data/index.js";
const headerBasketCount = document.querySelector("#basket-length");

//toaster
var notyf = new Notyf({
  duration: 1500,
  position: {
    x: "right",
    y: "bottom",
  },
});
const basketApp = new Basket();
document.addEventListener("DOMContentLoaded", function () {
  //id, quantity
  const basketProducts = products
    .map((product) => {
      const basketItem = basketApp.basketItems.find(
        (item) => item.id === product.id
      );
      if (basketItem) {
        return {
          ...product,
          quantity: basketItem.quantity,
        };
      }
      return null;
    })
    .filter(Boolean); //removes null (falsy)

  renderBasketTable(basketProducts);
  renderOrderSummary(basketProducts);
});

function renderBasketTable(arr) {
  const tBody = document.querySelector("tbody");
  tBody.innerHTML = "";
  if (arr.length === 0) {
    tBody.innerHTML = ` <h2 class="flex justify-center gap-5 py-4 text-3xl text-center text-red-500 w-full bg-white">
                                <span>Not any item in basket!</span>
                                <a class="text-black underline" href="index.html"> Start shopping</a>
                            </h2>`;
  }
  arr.forEach((basketItem) => {
    tBody.innerHTML += `
        <tr data-id="${basketItem.id}" class="border-b border-b-gray-400">
                                <td class="p-4 flex items-center gap-4">
                                    <img class="w-18 h-20 object-cover" title="${
                                      basketItem.title
                                    }" alt="${basketItem.title}" src=${
      basketItem.imageURL
    } class="w-16 h-16 rounded" />
                                    <div>
                                        <p class="font-medium">${
                                          basketItem.title
                                        } by ${basketItem.brand}</p>
                                        <p class="text-xs text-gray-500">Size: ${basketItem.size.toUpperCase()}, Color: ${
      basketItem.color
    }</p>
                                    </div>
                                </td>
                                <td class="p-4">$${basketItem.price.toFixed(
                                  2
                                )}</td>
                                <td class="p-4">
                                    <div class="flex items-center justify-center gap-2">
                                        <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 decrease">−</button>
                                        <span class="min-w-[24px] text-center">${
                                          basketItem.quantity
                                        }</span>
                                        <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 increase">+</button>
                                    </div>
                                </td>
                                <td class="p-4 font-medium">$${(
                                  basketItem.price * basketItem.quantity
                                ).toFixed(2)}</td>
                                <td class="p-4 text-center">
                                    <button
                                        class="cursor-pointer border rounded p-2 border-red-400 text-red-500 hover:text-red-700 text-sm remove">Remove</button>
                                </td>
                            </tr>
        `;

    // increase buttons
    const increaseButtons = document.querySelectorAll(".increase");
    const decreaseButtons = document.querySelectorAll(".decrease");
    const removeButtons = document.querySelectorAll(".remove");

    increaseButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.closest("tr").getAttribute("data-id");
        const product = products.find((x) => x.id == id);
        basketApp.addToBasket(product);
        const basketProducts = products
          .map((product) => {
            const basketItem = basketApp.basketItems.find(
              (item) => item.id === product.id
            );
            if (basketItem) {
              return {
                ...product,
                quantity: basketItem.quantity,
              };
            }
            return null;
          })
          .filter(Boolean); //removes null (falsy)
        renderBasketTable(basketProducts);
        renderOrderSummary(basketProducts);
        notyf.success(`one more added!`);
      });
    });
    decreaseButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.closest("tr").getAttribute("data-id");
        const product = products.find((x) => x.id == id);
        basketApp.removeFromBasket(product.id);
        const basketProducts = products
          .map((product) => {
            const basketItem = basketApp.basketItems.find(
              (item) => item.id === product.id
            );
            if (basketItem) {
              return {
                ...product,
                quantity: basketItem.quantity,
              };
            }
            return null;
          })
          .filter(Boolean); //removes null (falsy)
        renderBasketTable(basketProducts);
        renderOrderSummary(basketProducts);
        notyf.success(`one removed from basket!`);
        headerBasketCount.textContent = basketApp.getBasketCount();
      });
    });
    removeButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.closest("tr").getAttribute("data-id");
        const product = products.find((x) => x.id == id);
        basketApp.removeAllQuantity(product.id);
        const basketProducts = products
          .map((product) => {
            const basketItem = basketApp.basketItems.find(
              (item) => item.id === product.id
            );
            if (basketItem) {
              return {
                ...product,
                quantity: basketItem.quantity,
              };
            }
            return null;
          })
          .filter(Boolean); //removes null (falsy)
        renderBasketTable(basketProducts);
        renderOrderSummary(basketProducts);
        notyf.success(`all removed from basket!`);
        headerBasketCount.textContent = basketApp.getBasketCount();
      });
    });
  });
}

function renderOrderSummary(arr) {
  const subTotalElement = document.querySelector("#sub-total-element");
  const totalElement = document.querySelector("#total-element");
  const subTotal = arr
    .reduce((acc, currentItem) => {
      return (acc += currentItem.price * currentItem.quantity);
    }, 0)
    .toFixed(2);

  if (subTotal == 0) {
    subTotalElement.closest(".card").remove();
  }

  const total = (+subTotal + 5).toFixed(2);

  subTotalElement.textContent = subTotal + "$";
  totalElement.textContent = total + "$";
}

const couponForm = document.querySelector("#coupon-form");
couponForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const couponInput = document.querySelector("#coupon-form input");
  const coupon = couponInput.value;
  //SUMMER50
  const couponPercentage = +couponInput.value.slice(6);
  if (
    coupon.startsWith("SUMMER") &&
    couponPercentage <= 50 &&
    couponPercentage >= 0
  ) {
    couponInput.value = "";
    const totalElement = document.querySelector("#total-element");
    console.log(totalElement.textContent);
    const priceString = totalElement.textContent;
    const numericString = priceString.replace(/[^0-9.]/g, "");
    const currentTotalPrice = parseFloat(numericString);

    const priceWithCoupon =
      currentTotalPrice - (currentTotalPrice * couponPercentage) / 100;
    totalElement.textContent = priceWithCoupon.toFixed(2) + "$";
    notyf.success(`Coupon Applied ${couponPercentage}!`);
    //coupon form delete
    this.remove();
  } else {
    notyf.error("Invalid Coupon!");
    couponInput.value = "";
  }
});

//order click
const orderButton = document.querySelector(".order");
orderButton.addEventListener("click", function () {
  notyf.success("your order is on the way!");
  renderOrderSummary([]);
  renderBasketTable([]);
  basketApp.clearAllBasket();
  headerBasketCount.textContent = "0";
});
