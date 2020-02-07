const express = require("express");
const router = express.Router();

const { Tenant } = require("../models/tenant");

router.get("/", async (req, res) => {
  const tenants = await Tenant.find().select(
    "-__v -password -dateCreated -userType"
  );
  res.send(tenants);
});

module.exports = router;
