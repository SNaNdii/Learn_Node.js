const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "afc8d1ade1bc8b",
    pass: "f9ecfd400f3cf8",
  },
});

