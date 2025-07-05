const MessageModel = require("../models/messageModel");

const getAll = async () => await MessageModel.find();

const getOne = async (id) => await MessageModel.findById(id);

const post = async (payload) => await MessageModel.create(payload);

const update = async (id, payload) =>
  await MessageModel.findByIdAndUpdate(id, payload, { new: true });

const deleteOne = async (id) => await MessageModel.findByIdAndDelete(id);

module.exports = {
  getAll,
  getOne,
  update,
  deleteOne,
  post,
};
