const express = require("express");
const router = express.Router();

// Local imports
const { Asset } = require("../models/assets");
const { manipulateData } = require("../services/filterAssetData");

// Routes to save assets list recieved from the client
router.post("/", async (req, res) => {
  res.send(req.body);

  // Function call to filter and clean the data
  const array = manipulateData(req.body);

  await Asset.create(array);
});

module.exports = router;
