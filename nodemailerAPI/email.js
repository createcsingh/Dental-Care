const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ee1fba5bf3b7bd",
    pass: "a33474c453b114"
  }
});

const message = {
  from: "your_email_account@domain.com",
  to: "recipient_email_account@domain.com",
  subject: "Hello!",
  text: "This is a test of Mailtrap and Nodemailer. "
}

transport.sendMail(message, (err, info) => {
if (err) {
 console.log(err)
} else {
 console.log(info);
}
});
