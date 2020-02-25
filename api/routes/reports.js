const express = require("express");
const router = express.Router();

const { Asset } = require("../models/assets");

router.get("/all", async (req, res) => {
  try {
    const data = await Asset.aggregate([
      { $match: {} },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { total: -1 } }
    ]);
    res.send(data);
  } catch (error) {
    res.status(500).send("Unable to fetch assets");
  }
});

router.get("/verifiedStatus", async (req, res) => {
  try {
    const data = await Asset.aggregate([
      { $match: {} },
      { $group: { _id: "$verifiedStatus", count: { $sum: 1 } } },
      { $sort: { total: -1 } }
    ]);
    res.send(data);
  } catch (error) {
    res.status(500).send("Unable to fetch assets");
  }
});

module.exports = router;
