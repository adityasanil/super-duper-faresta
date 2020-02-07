const express = require("express");
const router = express.Router();

// External packages
const _ = require("lodash");
const bcrypt = require("bcrypt");
const generateRandomPassword = require("randomstring");

// Models
const { Tenant } = require("../models/tenant");

// Local imports
const sendMail = require("../services/mailSender");

router.post("/", async (req, res) => {
  // To prevent tenants with similar email-id
  let tenant = await Tenant.findOne({ email: req.body.email });
  if (tenant) return res.status(400).send("Tenant already registered");

  const tenantData = {
    name: req.body.name,
    email: req.body.email,
    companyName: req.body.companyName,
    role: req.body.role,
    designation: req.body.designation,
    panNumber: req.body.panNumber,
    orgEmail: req.body.orgEmail,
    userType: req.body.userType,
    contact: req.body.contact,
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

  // Hash password
  const salt = await bcrypt.genSalt(10);
  tenant.password = await bcrypt.hash(tenant.password, salt);

  // Save to database
  await tenant.save();

  // Send mail to the registered tenant
  await sendMail.sendCredentials(tenant.email, unHashedPassword);

  // Get auth token from tenant model
  // const token = tenant.generateAuthToken();

  // Display data of tenant that was saved and set headers
  res.send(
    _.pick(tenant, [
      "_id",
      "name",
      "email",
      "companyName",
      "orgDatabase",
      "role",
      "userType",
      "registeredOn"
    ])
  );
});

module.exports = router;
