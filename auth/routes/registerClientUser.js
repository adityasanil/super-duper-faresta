const express = require("express");
const router = express.Router();

// External packages
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const generateRandomPassword = require("randomstring");

// Models
const { Tenant } = require("../models/tenant");

// Local imports
const sendMail = require("../services/mailSender");

router.post("/", async (req, res) => {
  // To prevent tenants with similar email-id
  let tenant = await Tenant.findOne({ email: req.body.email });
  if (tenant) return res.status(500).send({ res: "Tenant already registered" });

  const tenantData = {
    companyName: req.body.companyName,
    panNumber: req.body.panNumber,
    contact: req.body.contact,
    designation: req.body.designation,
    email: req.body.email,
    role: req.body.role,
    userType: req.body.userType,
    name: req.body.name,
    registeredBy: req.body.registeredBy,
    orgDatabase:
      req.body.companyName
        .toString()
        .replace(/ /g, "")
        .toLowerCase() + "-db"
  };

  tenant = new Tenant(tenantData);

  // Generate random string as password for the registered user.
  tenant.password = generateRandomPassword.generate(8);

  const unHashedPassword = tenant.password;

  // // Hash password
  const salt = await bcrypt.genSalt(10);
  tenant.password = await bcrypt.hash(tenant.password, salt);

  try {
    // Save to database
    await tenant.save();

    // Send mail to the registered tenant
    await sendMail.sendCredentials(tenant.email, unHashedPassword);

    res.send({ res: "User registered" });
  } catch (error) {
    return res.status(500).send({ res: "User registration failed" });
  }

  // Get auth token from tenant model
  // const token = tenant.generateAuthToken();
});

module.exports = router;
