const {
  getAll,
  getOne,
  deleteOne,
  post,
  update,
} = require("../services/messageService");
const formatMongoData = require("../utils/formatMongoData");
const {
  sendContactConfirmationMail,
  sendContactMailToApp,
} = require("../utils/sendMailService");

const getAllMessages = async (req, res, next) => {
  try {
    const messages = await getAll();
    if (!messages) throw new Error("messages not found!");
    res.status(200).json({
      message: "messages retrieved successfully!",
      data: formatMongoData(messages),
    });
  } catch (error) {
    next(error);
  }
};

const getMessageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const message = await getOne(id);
    if (!message) throw new Error("message not found!");
    res.status(200).json({
      message: "message retrieved successfully!",
      data: formatMongoData(message),
    });
  } catch (error) {
    next(error);
  }
};

const deleteMessageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedMessage = await deleteOne(id);
    if (!deletedMessage) throw new Error("message not found!");
    res.status(200).json({
      message: "message deleted successfully!",
      data: formatMongoData(deletedMessage),
    });
  } catch (error) {
    next(error);
  }
};

const updateMessageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedMessage = await update(id, req.body);
    if (!updatedMessage) throw new Error("message not found!");
    res.status(200).json({
      message: "message updated successfully!",
      data: formatMongoData(updatedMessage),
    });
  } catch (error) {
    next(error);
  }
};

const postMessage = async (req, res, next) => {
  try {
    //send email to client
    sendContactConfirmationMail({
      fullName: req.body.fullName,
      clientEmail: req.body.email,
    });
    //send email to app owner
    sendContactMailToApp({
      fullName: req.body.fullName,
      clientEmail: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
    const newMessage = await post(req.body);
    res.status(201).json({
      message: "message posted successfully!",
      data: formatMongoData(newMessage),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMessages,
  getMessageById,
  deleteMessageById,
  updateMessageById,
  postMessage,
};
