const productValidationSchema = require("../validations/product.validation");

const validateProduct = (req, res, next) => {
  const { error } = productValidationSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((detail) => detail.message),
    });
  } else {
    next();
  }
};


module.exports = validateProduct;
