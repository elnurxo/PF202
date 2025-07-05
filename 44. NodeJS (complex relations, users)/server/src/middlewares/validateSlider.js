const sliderValidationSchema = require("../validations/slider.validation");

const validateSlider = (req, res, next) => {
  const { error } = sliderValidationSchema.validate(req.body, {
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

module.exports = validateSlider;
