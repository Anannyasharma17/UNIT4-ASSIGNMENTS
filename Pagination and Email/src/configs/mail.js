const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, 
  auth: {
    user: "446beb2ff79d5e",
    pass: "aa2fbc83f3519f", 
}
});