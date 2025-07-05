const Joi = require("joi");

const productValidationSchema = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  costPrice: Joi.number().min(0).required(),
  salePrice: Joi.number()
    .positive()
    .min(Joi.ref("costPrice"))
    .required()
    .messages({
      "number.min": '"salePrice" must be greater than or equal to "costPrice"',
    }),
  discountPercentage: Joi.number()
    .positive()
    .min(0)
    .max(100)
    .required()
    .default(0),
  description: Joi.string().min(10).max(200).required(),
  isFeatured: Joi.boolean().default(false),
  stockQuantity: Joi.number().min(0).positive().integer().required().default(0),
  category: Joi.string().length(24).hex().required().messages({
    "string.length": "Category ID must be exactly 24 characters.",
    "string.hex": "Category ID must be a valid hexadecimal string.",
  }),
  imageUrl: Joi.string().uri().required(),
  public_id: Joi.string().required(),
});

module.exports = productValidationSchema;
