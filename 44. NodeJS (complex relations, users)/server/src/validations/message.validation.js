const Joi = require("joi");

const messageValidationSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(2).max(100).required(),
  message: Joi.string().min(2).max(500).required(),
});

module.exports = messageValidationSchema;
