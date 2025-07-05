const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  postProduct,
} = require("../controllers/productController");
const validateProduct = require("../middlewares/validateProduct");
const apiKeyMiddleware = require("../middlewares/apiKey");
const upload = require("../middlewares/multer");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);
router.patch("/:id", upload.single("imageUrl"), updateProductById);
router.post(
  "/",
  validateProduct,
  apiKeyMiddleware,
  upload.single("imageUrl"),
  postProduct
);

module.exports = router;
