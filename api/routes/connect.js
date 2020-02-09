const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Local imports
const { dbUriFunc } = require("../services/dbConnectionOrg/dbUriOrg");

router.post("/", async (req, res) => {
  // Connection to tenants db
  const db = req.body.db;
  const tenantDBUri = dbUriFunc(db);
  const tenantsDB = mongoose
    .connect(tenantDBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => console.log(`Connected to ${db} api database..`))
    .catch(err => console.log("Could not connect to api database: ", err));
  res.status(200).send("connected");
});

module.exports = router;
