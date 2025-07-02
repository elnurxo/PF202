const { Schema } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    costPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    salePrice: {
      type: Number,
      required: true,
      min: 0,
    },
    discountPercentage: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 100,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxLength: 200,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    stockQuantity: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    soldQuantity: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = productSchema;
