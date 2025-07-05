const express = require("express");
const {
  getAllMessages,
  getMessageById,
  deleteMessageById,
  updateMessageById,
  postMessage,
} = require("../controllers/messageController");
const validateMessage = require("../middlewares/validateMessage");
const router = express.Router();

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.delete("/:id", deleteMessageById);
router.post("/", validateMessage, postMessage);
router.patch("/:id", updateMessageById);

module.exports = router;
