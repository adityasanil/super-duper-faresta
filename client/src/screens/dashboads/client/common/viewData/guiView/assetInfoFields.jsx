import React, { Fragment, Component } from "react";
import { Grid } from "@material-ui/core";
import InputField from "components/form/inputField";

class AssetInfoFields extends Component {
  render() {
    const { handleOnChange, assetData, user } = this.props;
    return (
      <Fragment>
        <Grid container direction="row">
        <InputField
              id="standard-read-only-input"
              className="asset-text-field"
              value={assetData.asset_code}
              helperText="Asset Code"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="date_of_installation"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.description}
              helperText="Description"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="description"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"
              value={assetData.date_of_installation}
              helperText="Date of Installation"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="date_of_installation"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.month_of_installation}
              helperText="Month of Installation"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="month_of_installation"
              onChange={handleOnChange}
            />  
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"
              value={assetData.vendor_name}
              helperText="Vendor Name"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="vendor_name"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.depreciation}
              helperText="Depreciation"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="depreciation"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.invoice_number}
              helperText="Invoice Number"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="invoice_number"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.location}
              helperText="Location"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="location"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.invoice_date}
              helperText="Invoice Date"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="invoice_date"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.service_tax}
              helperText="Service Tax"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="service_tax"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.vat}
              helperText="VAT"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="vat"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.amount_capitalised}
              helperText="Amount Capitalized"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="amount_capitalised"
              onChange={handleOnChange}
            />

            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.category}
              helperText="Category"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="category"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.other_charges}
              helperText="Other Charges"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="other_charges"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.quantity}
              helperText="Quantity"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="quantity"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.total_invoice_amount}
              helperText="Total Invoice Amount"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="total_invoice_amount"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.dep_per_day}
              helperText="Depreciation Per Day"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="depreciation_per_day"
              onChange={handleOnChange}
            />

            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.base_amount}
              helperText="Base Amount"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="base_amount"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.gross_block}
              helperText="Gross Block"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="pending_useful_life"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.number_of_days}
              helperText="Number of Days"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="number_of_days"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.element}
              helperText="Element"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="element"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.useful_life_companies_act}
              helperText="Useful Life Companies Act"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="element"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.useful_life_management}
              helperText="Useful Life Management"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="element"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.wdv_opening}
              helperText="WDV Opening"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="element"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.wdv_closing}
              helperText="WDV Closing"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="element"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.classification}
              helperText="Classification"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="element"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.purchase_value}
              helperText="Purchase Value"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="element"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.taxes_}
              helperText="Taxes"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="element"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
              className="asset-text-field"              
              value={assetData.capitalised_value}
              helperText="Capitalized Value"
              InputProps={
                user.role === "senior"
                  ? {
                      readOnly: false
                    }
                  : {
                      readOnly: true
                    }
              }
              variant="outlined"
              name="element"
              onChange={handleOnChange}
            />
        </Grid>

        {/* Junior Remarks */}

        {(user.role === "junior" || user.role === "senior") && (
          <Fragment>
            <Grid container>
            <Grid item xs={12} md={4} lg={4}>
              <InputField
                className="remark-field-background remark-text-field"
                id="standard-read-only-input"
                placeholder="Add Remarks if any"
                variant="outlined"
                onChange={handleOnChange}
                name="remarkJunior_1"
                InputProps={
                  user.role === "senior"
                    ? {
                        readOnly: true
                      }
                    : {
                        readOnly: false
                      }
                }
              />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
              <InputField
                className="remark-field-background remark-text-field"
                id="standard-read-only-input"
                placeholder="Add Remarks if any"
                variant="outlined"
                onChange={handleOnChange}
                name="remarkJunior_2"
                InputProps={
                  user.role === "senior"
                    ? {
                        readOnly: true
                      }
                    : {
                        readOnly: false
                      }
                }
              />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
              <InputField
                className="remark-field-background remark-text-field"
                id="standard-read-only-input"
                placeholder="Add Remarks if any"
                variant="outlined"
                onChange={handleOnChange}
                name="remarkJunior_3"
                InputProps={
                  user.role === "senior"
                    ? {
                        readOnly: true
                      }
                    : {
                        readOnly: false
                      }
                }
              />
              </Grid>
            </Grid>
          </Fragment>
        )}
        {/* Auditor Remarks */}
        {(user.role === "auditor" || user.role === "senior") && (
          <Fragment>
           <Grid container>
            <Grid item xs={12} md={4} lg={4}>
              <InputField
                className="auditorRemark-field-background remark-text-field"
                id="standard-read-only-input"
                placeholder="Add Remarks if any"
                variant="outlined"
                onChange={handleOnChange}
                name="remarkAuditor_1"
                InputProps={
                  user.role === "senior"
                    ? {
                        readOnly: true
                      }
                    : {
                        readOnly: false
                      }
                }
              />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
              <InputField
                className="auditorRemark-field-background remark-text-field"
                id="standard-read-only-input"
                placeholder="Add Remarks if any"
                variant="outlined"
                onChange={handleOnChange}
                name="remarkAuditor_2"
                InputProps={
                  user.role === "senior"
                    ? {
                        readOnly: true
                      }
                    : {
                        readOnly: false
                      }
                }
              />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
              <InputField
                className="auditorRemark-field-background remark-text-field"
                id="standard-read-only-input"
                placeholder="Add Remarks if any"
                variant="outlined"
                onChange={handleOnChange}
                name="remarkAuditor_3"
                InputProps={
                  user.role === "senior"
                    ? {
                        readOnly: true
                      }
                    : {
                        readOnly: false
                      }
                }
              />
              </Grid>
            </Grid>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default AssetInfoFields;
