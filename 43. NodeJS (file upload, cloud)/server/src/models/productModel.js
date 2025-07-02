const productSchema = require("../schemas/productSchema");
const mongoose = require("mongoose");

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
