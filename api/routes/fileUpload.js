const express = require("express");
const router = express.Router();
const multer = require("multer");
const AWS = require("aws-sdk");
const config = require("config");

const { Asset } = require("../models/assets");

AWS.config.update({
  accessKeyId: process.env.FAR_AWS_ACCESSKEY_ID,
  secretAccessKey: process.env.FAR_AWS_SECRETKEY
});

const uploadParams = {
  Bucket: config.get("far_awsBucket"),
  Key: null,
  Body: null,
  ACL: "public-read"
};

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), async (req, res) => {
  const id = req.body.id;
  const params = uploadParams;

  uploadParams.Key =
    Date.now() + "-" + req.file.originalname.toLowerCase().replace(/\s/g, "");
  uploadParams.Body = req.file.buffer;

  try {
    await new AWS.S3().putObject(params).promise();
  } catch (e) {
    console.log("Error uploading data: ", e);
  }
  const imageUri = `https://fixed-asset-flookup.s3.ap-south-1.amazonaws.com/${params.Key}`;

  const asset = await Asset.updateOne(
    { _id: id },
    {
      $set: {
        imageUri: imageUri
      }
    }
  );
  res.send(asset);
});

module.exports = router;
