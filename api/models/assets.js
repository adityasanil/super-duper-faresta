const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  category: { type: String },
  element: { type: String },
  identifier: { type: String },
  date_of_installation: { type: String },
  month_of_installation: { type: String },
  vendor_name: { type: String },
  invoice_date: { type: String },
  invoice_number: { type: String },
  particulars: { type: String },
  location: { type: String },
  quantity: { type: String },
  base_amount: { type: String },
  vat: { type: String },
  service_tax: { type: String },
  other_charges: { type: String },
  total_invoice_amount: { type: String },
  amount_capitalised: { type: String },
  pending_useful_life: { type: String },
  depreciation_per_day: { type: String },
  number_of_days: { type: String },
  depreciation: { type: String },
  net_block: { type: String },
  date: { type: Date, default: Date.now },
  imageUri: { type: String },
  verifiedStatus: { type: Boolean, default: false },
  remarkJunior_1: { type: String },
  remarkJunior_2: { type: String },
  remarkJunior_3: { type: String },
  remarkAuditor_1: { type: String },
  remarkAuditor_2: { type: String },
  remarkAuditor_3: { type: String }
});

const Asset = mongoose.model("Asset", assetSchema);

exports.Asset = Asset;
