const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Local imports
const database = require("../services/dbConnectionOrg/dbConnectOrg");

router.post("/", async (req, res) => {
  // Connection to tenants db
  const db = req.body.db;
  database.connect(db);

  res.status(200).send("connected");
});

module.exports = router;
