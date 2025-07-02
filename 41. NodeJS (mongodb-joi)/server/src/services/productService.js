const ProductModel = require("../models/productModel");

const getAll = async () => await ProductModel.find();

const getById = async (id) => await ProductModel.findById(id);

const deleteById = async (id) => await ProductModel.findByIdAndDelete(id);

const updateById = async (id, payload) =>
  await ProductModel.findByIdAndUpdate(id, payload, { new: true });

const post = async (payload) => await ProductModel.create(payload);

module.exports = {
  getAll,
  getById,
  deleteById,
  updateById,
  post,
};
