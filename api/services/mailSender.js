const nodemailer = require("nodemailer");
const config = require("config");
let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 25,
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.get("far_emailAccount"),
    pass: config.get("mailPassword")
  },
  tls: {
    rejectUnauthorized: false
  }
});

async function notifyOnOrgCreation(orgName, databaseName) {
  const messageBody =
    "<h3>New organisation added to the platform!</h3><p><b>Organisation name:</b> " +
    orgName +
    " </p><p><b>Database name:</b> " +
    databaseName +
    "</p>";

  let info = {
    from: '"Flookup - Fixed Assets Register" ' + config.get("far_emailAccount"),
    to: config.get("far_emailAccount"),
    subject: "New organisation added to the platform - FAR, Flookup",
    html: messageBody
  };

  transporter.sendMail(info, (err, info) => {
    if (err) {
      return console.log(err);
    }
    // return info;
  });
}

async function decryptKey(recepient, key) {
  const messageBody =
    "<h3>Welcome aboard!</h3><p>Below is your key for QR Scanner:</p><p><b>Email:</b> " +
    recepient +
    " </p><p><b>Key:</b> " +
    key +
    "</p><p>Do not share them with anyone.</p>";

  let info = {
    from: '"Flookup - Fixed Assets Register" ' + config.get("far_emailAccount"),
    to: recepient,
    subject: "Welcome to Fixed Assets Register - Flookup",
    html: messageBody
  };

  transporter.sendMail(info, (err, info) => {
    if (err) {
      return console.log(err);
    }
    // console.log("Message sent!");
    return info;
  });
}
async function sendCredentials(recepient, password) {
  const messageBody =
    "<h3>Welcome aboard!</h3><p>Below are your credentials to log in:</p><p><b>Email:</b> " +
    recepient +
    " </p><p><b>Password:</b> " +
    password +
    "</p><p>Do not share them with anyone.</p>";

  let info = {
    from: '"Flookup - Fixed Assets Register" ' + config.get("far_emailAccount"),
    to: recepient,
    subject: "Welcome to Fixed Assets Register - Flookup",
    html: messageBody
  };

  transporter.sendMail(info, (err, info) => {
    if (err) {
      return console.log(err);
    }
    // console.log("Message sent!");
    return info;
  });
}

// notifyOnOrgCreation("Flookup", "Flookup-db");
// main("aditya.sanil24@gmail.com", "aditya.sanil24@gmail.com", "12333");

module.exports = { sendCredentials, notifyOnOrgCreation, decryptKey };
