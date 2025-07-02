const { Schema } = require("mongoose");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//virtual
categorySchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "category",
  justOne: false,
});

categorySchema.set("toObject", { virtuals: true });
categorySchema.set("toJSON", { virtuals: true });

module.exports = categorySchema;
