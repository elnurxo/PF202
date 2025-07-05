const {
  getAllSliders,
  getSliderById,
  postSlider,
  updateSlider,
  deleteSlider,
} = require("../controllers/sliderController");
const upload = require("../middlewares/multer");
const express = require("express");
const validateSlider = require("../middlewares/validateSlider");
const router = express.Router();

router.get("/", getAllSliders);
router.get("/:id", getSliderById);
router.post("/", validateSlider, upload.single("url"), postSlider);
router.delete("/:id", deleteSlider);
router.patch("/:id", upload.single("url"), updateSlider);

module.exports = router;
