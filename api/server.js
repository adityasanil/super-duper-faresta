// Packages
const express = require("express");
const app = express();
const cors = require("cors");
const config = require("config");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

//Local imports
const connect = require("./routes/connect");
const sendMail = require("./routes/sendMail");
const getAssets = require("./routes/getAssets");
const fileUpload = require("./routes/fileUpload");
const saveAssetsList = require("./routes/saveAssetsList");

// Check if the jwt private key is set or not
if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: Set far_jwtPrivateKey.");
  process.exit(1);
}

// Check if the email account password is set or not
if (!config.get("mailPassword")) {
  console.log(
    "FATAL ERROR: Set far_mailPassword emailing account password (tech@flookup.com). "
  );
  process.exit(1);
}

// Check if the database password is set or not
if (!config.get("dbPassword")) {
  console.log("FATAL ERROR: Set far_dbPassword password (tech@flookup.com). ");
  process.exit(1);
}

if (!config.get("accessKeyIdAws")) {
  console.log("FATAL ERROR: Set far_accessKeyIdAws. ");
  process.exit(1);
}
if (!config.get("secretKeyAws")) {
  console.log("FATAL ERROR: Set far_accessKeyIdAws. ");
  process.exit(1);
}

// DB connection to authentication database
// const dbName = config.get("dbName");
// authDbConnection.connect(dbName);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);

// Routes
// app.use("/auth", auth);
app.use("/connect", connect);
app.use("/sendMail", sendMail);
app.use("/getAssets", getAssets);
app.use("/imageUpload", fileUpload);
app.use("/saveAssets", saveAssetsList);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

module.exports = app;
