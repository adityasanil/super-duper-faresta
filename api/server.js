// Packages
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

//Local imports
const connect = require("./routes/connect");
const sendMail = require("./routes/sendMail");
const getAssets = require("./routes/getAssets");
const fileUpload = require("./routes/fileUpload");
const saveAssetsList = require("./routes/saveAssetsList");

// Check if the jwt private key is set or not
if (!process.env.FAR_JWT_PRIVATEKEY) {
  console.log("FATAL ERROR: Set FAR_JWT_PRIVATEKEY.");
  process.exit(1);
}

// Check if the email account password is set or not
if (!process.env.FAR_MAIL_PASSWORD) {
  console.log(
    "FATAL ERROR: Set FAR_MAIL_PASSWORD emailing account password (tech@flookup.com). "
  );
  process.exit(1);
}

// Check if the database password is set or not
if (!process.env.FAR_DB_PASSWORD) {
  console.log("FATAL ERROR: Set FAR_DB_PASSWORD password (tech@flookup.com). ");
  process.exit(1);
}

if (!process.env.FAR_AWS_ACCESSKEY_ID) {
  console.log("FATAL ERROR: Set FAR_AWS_ACCESSKEY_ID. ");
  process.exit(1);
}
if (!process.env.FAR_AWS_SECRETKEY) {
  console.log("FATAL ERROR: Set FAR_AWS_SECRETKEY. ");
  process.exit(1);
}

// DB connection to authentication database
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);

// Routes
app.use("/connect", connect);
app.use("/sendMail", sendMail);
app.use("/getAssets", getAssets);
app.use("/imageUpload", fileUpload);
app.use("/saveAssets", saveAssetsList);

// Port
const PORT = process.env.FAR_API_PORT || 5000;
app.listen(PORT, () => console.log(`Api app listening on port ${PORT}...`));

module.exports = app;
