const categorySchema = require("../schemas/categorySchema");
const mongoose = require("mongoose");

const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
