const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const tenantSchema = new mongoose.Schema({
  companyName: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  panNumber: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  orgEmail: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  contact: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  designation: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    minlength: 3,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    minlength: 3,
    maxlength: 1024
  },
  role: {
    type: String,
    minlength: 3,
    maxlength: 255
  },
  userType: {
    type: String,
    minlength: 3,
    maxlength: 255
  },
  orgDatabase: {
    type: String,
    minlength: 3,
    maxlength: 255
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 255
  },
  registeredBy: {
    type: String,
    minlength: 3,
    maxlength: 255
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

tenantSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      role: this.role,
      userType: this.userType,
      companyName: this.companyName,
      orgDatabase: this.orgDatabase
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

const Tenant = mongoose.model("Tenant", tenantSchema);

exports.Tenant = Tenant;
