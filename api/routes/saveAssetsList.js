const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Local imports
const { Asset } = require("../models/assets");
const { manipulateData } = require("../services/filterAssetData");

// Routes to save assets list recieved from the client
router.post("/", async (req, res) => {
  // Function call to filter and clean the data
  const array = manipulateData(req.body);

  try {
    const store = await Asset.insertMany(array);
    res.send({ res: "Asset list added" });
  } catch (error) {
    res.status(500).send({ res: "Failed to upload data" });
  }
});

module.exports = router;
