const Joi = require("joi");

const categoryValidationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(10).max(300).required(),
});

module.exports = categoryValidationSchema;
