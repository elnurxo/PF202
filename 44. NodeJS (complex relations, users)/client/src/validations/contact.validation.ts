import * as Yup from "yup";

const contactFormValidation = Yup.object().shape({
  fullName: Yup.string().required(),
  email: Yup.string().email().required(),
  subject: Yup.string().min(2).max(60).required(),
  message: Yup.string().min(10).max(500).required(),
});

export default contactFormValidation;
