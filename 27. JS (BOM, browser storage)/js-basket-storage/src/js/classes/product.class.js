export class Product {
  static id = 1;
  title;
  gender;
  brand;
  color;
  size;
  price;
  stockQuantity;
  imageURL;

  constructor(
    title,
    gender,
    brand,
    color,
    size,
    price,
    stockQuantity,
    imageURL
  ) {
    this.id = Product.id++;
    this.title = title;
    this.gender = gender;
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.price = price;
    this.stockQuantity = stockQuantity;
    this.imageURL = imageURL;
  }

  reduceStockQuantity(quantity) {
    this.stockQuantity -= quantity;
  }
}
