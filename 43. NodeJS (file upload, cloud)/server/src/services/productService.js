const ProductModel = require("../models/productModel");
const cloudinary = require("../config/cloudinary");

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

const deleteById = async (id) => {
  const product = await ProductModel.findById(id);
  if (!product) throw new Error("product not found!");

  // Delete from Cloudinary
  await cloudinary.uploader.destroy(product.public_id);

  // Delete from MongoDB
  return await ProductModel.findByIdAndDelete(id);
};

const deleteMany = async (categoryId) => {
  const resp = await ProductModel.deleteMany({ category: categoryId });
  for (let i = 0; i < resp.length; i++) {
    await cloudinary.uploader.destroy(resp[i].public_id);
  }
  return resp;
};

const updateById = async (id, payload) => {
  const existing = await ProductModel.findById(id);
  if (!existing) return null;

  if (payload.public_id) {
    await cloudinary.uploader.destroy(existing.public_id);
  }

  return await ProductModel.findByIdAndUpdate(id, payload, { new: true });
};

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
