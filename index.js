import "dotenv/config";
import { log } from "node:console";
import { createTransport } from "nodemailer";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

log(process.env.KEY);

//create  mail server using google
const mailServer = createTransport({
  service: "gmail",
  auth: {
    // user: "youremail@gmail.com",
    // pass: "yourpassword",
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PW,
  },
});

//create  mail server using outlook
// const mailServer2 = createTransport({
//   host: "smtp.office365.com",
//   port: 587,
//   secure: false,
//   auth: {
//     // user: "youremail@gmail.com",
//     // pass: "yourpassword",
//     user: process.env.FROM_EMAIL,
//     pass: process.env.EMAIL_PW,
//   },
// });

log("email send start");

//send email
mailServer.sendMail(
  {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "new msg",
    text: "Hello",
  },
  (err, infor) => {
    if (err) {
      log("can not send the email");
    } else {
      log("email sent");
    }
  }
);

log("email send end");
