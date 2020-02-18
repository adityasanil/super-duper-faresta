const express = require("express");
const router = express.Router();

const { Asset } = require("../models/assets");

router.post("/", async (req, res) => {
  const assetId = req.body.id;
  try {
    await Asset.deleteOne({ _id: assetId });
    res.send({ res: "Asset deleted" });
  } catch (error) {
    res.status(500).send({ res: "Asset deletion failed" });
  }
});

module.exports = router;
