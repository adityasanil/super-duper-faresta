const express = require("express");
const router = express.Router();

const { Asset } = require("../models/assets");

router.post("/", async (req, res) => {
  const assetId = req.body.id;
  const data = await Asset.deleteOne({ _id: assetId });
  res.send(data);
});

module.exports = router;
