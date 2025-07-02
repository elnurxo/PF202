const Joi = require("joi");

const sliderValidationSchema = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  url: Joi.string().uri().required(),
  public_id: Joi.string().required(),
});

module.exports = sliderValidationSchema;
