const SliderModel = require("../models/sliderModel");
const cloudinary = require('../config/cloudinary');

const getAll = async () => await SliderModel.find().lean();

const getOne = async (id) => await SliderModel.findById(id).lean();

const deleteOne = async (id) => {
  const slider = await SliderModel.findById(id);
  if (!slider) throw new Error('slider not found!');

  // Delete from Cloudinary
  await cloudinary.uploader.destroy(slider.public_id);

  // Delete from MongoDB
  return await SliderModel.findByIdAndDelete(id);
};

const update = async (id, payload) => {
  const existing = await SliderModel.findById(id);
  if (!existing) return null;

  if (payload.public_id) {
    await cloudinary.uploader.destroy(existing.public_id);
  }

  return await SliderModel.findByIdAndUpdate(id, payload, { new: true });
};

const post = async (payload) => await SliderModel.create(payload);

module.exports = {
  getAll,
  getOne,
  deleteOne,
  update,
  post,
};
