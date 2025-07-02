const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
  postCategory,
} = require("../controllers/categoryController");
const validateCategory = require("../middlewares/validateCategory");

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", validateCategory, postCategory);
router.patch("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);

module.exports = router;
