export class Product {
  id;
  title;
  gender;
  brand;
  color;
  size;
  price;
  stockQuantity;

  constructor(title, gender, brand, color, size, price, stockQuantity) {
    this.id = new Date().getTime() + Math.floor(Math.random(1) * 1000);
    this.title = title;
    this.gender = gender;
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.price = price;
    this.stockQuantity = stockQuantity;
  }

  reduceStockQuantity(quantity) {
    this.stockQuantity -= quantity;
  }
}
