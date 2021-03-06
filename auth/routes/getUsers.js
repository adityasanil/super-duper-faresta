const express = require("express");
const router = express.Router();

const { Tenant } = require("../models/tenant");

router.post("/", async (req, res) => {
  const tenants = await Tenant.find({
    orgDatabase: { $eq: req.body.db },
    role: { $ne: "senior" }
  }).select(
    "-__v -password -dateCreated -userType -companyName -panNumber -orgEmail"
  );
  res.send(tenants);
});

module.exports = router;
