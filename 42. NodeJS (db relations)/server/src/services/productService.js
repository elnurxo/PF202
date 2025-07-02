const ProductModel = require("../models/productModel");
const { getOne } = require("./categoryService");

//nice to have
const getAll = async ({ queryCast, sortBy, sortOrder, page, limit }) =>
  await ProductModel.find(queryCast)
    .sort({ [sortBy]: sortOrder })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate("category");

//get total products length
const getTotalProductsCount = async () => await ProductModel.countDocuments();

const getById = async (id) => await ProductModel.findById(id);

const deleteById = async (id) => await ProductModel.findByIdAndDelete(id);

const deleteMany = async (categoryId) => {
  const resp = await ProductModel.deleteMany({ category: categoryId });
  return resp;
};

const updateById = async (id, payload) =>
  await ProductModel.findByIdAndUpdate(id, payload, { new: true });

const post = async (payload) => await ProductModel.create(payload);

module.exports = {
  getAll,
  getById,
  deleteById,
  updateById,
  post,
  getTotalProductsCount,
  deleteMany,
};
