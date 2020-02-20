const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  asset_code: { type: String },
  category: { type: String },
  description: { type: String },
  element: { type: String },
  vendor_name: { type: String },
  quantity: { type: String },
  location: { type: String },
  base_amount: { type: String },
  date_of_installation: { type: String },
  month_of_installation: { type: String },
  vat: { type: String },
  taxes_: { type: String },
  service_tax: { type: String },
  other_charges: { type: String },
  invoice_date: { type: String },
  invoice_number: { type: String },
  total_invoice_amount: { type: String },
  amount_capitalised: { type: String },
  depreciation: { type: String },
  dep_rate: { type: String },
  dep_per_day: { type: String },
  net_block: { type: String },
  classification: { type: String },
  purchase_value: { type: String },
  capitalised_value: { type: String },
  useful_life_companies_act: { type: String },
  useful_life_management: { type: String },
  gross_block: { type: String },
  accumulated_depreciation: { type: String },
  wdv_opening: { type: String },
  wdv_closing: { type: String },
  number_of_days: { type: String },
  date: { type: Date, default: Date.now },
  imageUri: { type: String, default: null },
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
