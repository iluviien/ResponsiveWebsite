const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2ed702ac6e3116",
    pass: "16964a8c8d96d5"
  }
});
// send mail with defined transport object
let info = await transporter.sendMail({
  from: '"Sender Name" <sender@example.com>', // sender address
  to: "recipient@example.com", // list of receivers
  subject: "Test email", // Subject line
  text: "Hello from Mailtrap!", // plain text body
  html: "<b>Hello from Mailtrap!</b>" // html body
});

console.log("Message sent: %s", info.messageId);
