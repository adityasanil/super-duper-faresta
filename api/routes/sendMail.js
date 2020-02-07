const express = require("express");
const router = express.Router();

const { decryptKey } = require("../services/mailSender");

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  decryptKey(email, password);
});

module.exports = router;
