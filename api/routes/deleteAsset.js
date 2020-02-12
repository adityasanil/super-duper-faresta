const express = require("express");
const router = express.Router();

const { Asset } = require("../models/assets");

router.post("/", async (req, res) => {
  console.log(req.body);
  const assetId = req.body.id;
  console.log(assetId);
  const data = await Asset.deleteOne({ _id: assetId });
  res.send(data);
});

module.exports = router;
