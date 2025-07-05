const messageValidationSchema = require("../validations/message.validation");

const validateMessage = (req, res, next) => {
  const { error } = messageValidationSchema.validate(req.body, {
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


module.exports = validateMessage;
