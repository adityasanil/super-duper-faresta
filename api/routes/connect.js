const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Local imports
// const { dbUriFuncAuth } = require("../services/dbConnectionAuth/dbUri");
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
    .then(() => console.log(`Connected to database: ${tenantDBUri}..`))
    .catch(err => console.log("Could not connect to MongoDB: ", err));
  res.status(200).send("connected");
});

module.exports = router;
