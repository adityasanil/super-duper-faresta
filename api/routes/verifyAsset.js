const express = require("express");
const router = express.Router();

// Local imports
const { Asset } = require("../models/assets");

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const status = req.body.data;
  try {
    const result = await Asset.findOneAndUpdate(
      { _id: id },
      {
        $set: { verifiedStatus: status }
      },
      { new: true }
    );
    res.send({ res: "Asset verification status changed" });
  } catch (error) {
    res.status(500).send({ err: "Failed to verify asset" });
  }
});

module.exports = router;
