const { EMAIL_USERNAME, EMAIL_PASS } = require("./config");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_USERNAME,
    pass: EMAIL_PASS,
  },
});

module.exports = transporter;
