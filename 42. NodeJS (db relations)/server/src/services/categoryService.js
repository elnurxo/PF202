const CategoryModel = require("../models/categoryModel");

//get all
const getAll = async () =>
  await CategoryModel.find().populate("products").lean();

//get one
const getOne = async (id) =>
  await CategoryModel.findById(id).populate("products", "title").lean();

//post
const post = async (payload) => await CategoryModel.create(payload);

//delete
const deleteOne = async (id) => await CategoryModel.findByIdAndDelete(id);

//update
const update = async (id, payload) =>
  await CategoryModel.findByIdAndUpdate(id, payload, { new: true });

module.exports = {
  getAll,
  getOne,
  post,
  deleteOne,
  update,
};
