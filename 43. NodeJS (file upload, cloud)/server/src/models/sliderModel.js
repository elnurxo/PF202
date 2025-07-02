const sliderSchema = require("../schemas/sliderSchema");
const mongoose = require("mongoose");

const SliderModel = mongoose.model("Slider", sliderSchema);

module.exports = SliderModel;
