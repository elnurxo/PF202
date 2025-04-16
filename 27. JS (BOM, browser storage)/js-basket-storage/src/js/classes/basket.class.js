export class Basket {
  basketItems;

  constructor() {
    this.basketItems = JSON.parse(localStorage.getItem("basket")) || [];
  }

  addToBasket(newBasketItem) {
    if (newBasketItem.stockQuantity > 0) {
      //ok to add basket
      // newBasketItem.reduceStockQuantity();
      // does the product exist in basket
      const found = this.basketItems.find((x) => x.id == newBasketItem.id);
      if (found) {
        found.quantity++;
      } else {
        this.basketItems.push({ ...newBasketItem, quantity: 1 });
      }

      localStorage.setItem("basket", JSON.stringify([...this.basketItems]));
    } else {
      return "not enough product in stock!";
    }
  }

  removeFromBasket(id) {
    const found = this.basketItems.find((x) => x.id == id);
    if (found) {
      if (found.quantity > 1) {
        found.quantity--;
      } else {
        const idx = this.basketItems.findIndex((x) => x.id == id);
        this.basketItems.splice(idx, 1);
      }

      localStorage.setItem("basket", JSON.stringify([...this.basketItems]));
    } else {
      return "no such product in basket!";
    }
  }

  clearAllBasket() {
    this.basketItems = [];
    localStorage.setItem("basket", JSON.stringify([]));
  }

  getBasketItems() {
    return [...this.basketItems];
  }

  getBasketCount() {
    return this.basketItems.length;
  }
}
