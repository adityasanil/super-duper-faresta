const express = require("express");
const router = express.Router();

// External Packages
const bcrypt = require("bcrypt");

// Local imports
const { Tenant } = require("../models/tenant");

router.post("/", async (req, res) => {
  // Check if the user is present or not
  let tenant = await Tenant.findOne({ email: req.body.email });
  if (!tenant) return res.status(400).send("Invalid email or password");

  // Check password
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    tenant.password
  );
  if (!isPasswordValid)
    return res.status(400).send("Invalid email or password");

  // Get auth token from User model
  const token = tenant.generateAuthToken();

  // Send jwt token to set
  res.send(token);
});

module.exports = router;
