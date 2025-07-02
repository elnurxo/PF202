const { Schema } = require("mongoose");

const sliderSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = sliderSchema;
