const {
  getAll,
  getOne,
  post,
  update,
  deleteOne,
} = require("../services/sliderService");
const formatMongoData = require("../utils/formatMongoData");

const getAllSliders = async (req, res, next) => {
  try {
    const sliders = await getAll();
    if (!sliders) throw new Error("sliders not found!");
    res.status(200).json({
      message: "sliders retrieved successfully!",
      data: sliders,
    });
  } catch (error) {
    next(error);
  }
};

const getSliderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const slider = await getOne(id);
    if (!slider) throw new Error("slider not found!");
    res.status(200).json({
      message: "slider retrieved successfully!",
      data: formatMongoData(slider),
    });
  } catch (error) {
    next(error);
  }
};

//post, update, delete
const postSlider = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const sliderData = {
      title: req.body.title,
      url: req.file.path,
      public_id: req.file.filename,
    };

    const createdSlider = await post(sliderData);

    res.status(201).json({
      data: formatMongoData(createdSlider),
      message: "Slider created successfully",
    });
  } catch (error) {
    next(error);
  }
};

updateSlider = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateSlider = { ...req.body };
    if (req.file) {
      updateSlider.public_id = req.file.filename;
      updateSlider.url = req.file.path;
    }
    const updatedSliderResponse = await update(id, updateSlider);
    if (!updatedSliderResponse) throw new Error("slider not found!");
    res.status(200).json(formatMongoData(updatedSliderResponse));
  } catch (error) {
    next(error);
  }
};

deleteSlider = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSlider = await deleteOne(id);
    if (!deletedSlider) throw new Error("slider not found!");
    res.status(200).json(formatMongoData(deletedSlider));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSliders,
  getSliderById,
  postSlider,
  updateSlider,
  deleteSlider,
};
