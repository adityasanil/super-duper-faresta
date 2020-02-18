import React, { Fragment, Component } from "react";
import { Grid } from "@material-ui/core";
import InputField from "components/form/inputField";

class AssetInfoFields extends Component {
  render() {
    const { handleOnChange, assetData, user } = this.props;
    return (
      <Fragment>
        <Grid container direction="row">
          <Grid xs={12} md={3} lg={3}>
            <InputField
              id="standard-read-only-input"
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
              value={assetData.gross_block}
              helperText="Pending Useful Life"
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
              value={assetData.description}
              helperText="Particulars"
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
              name="particulars"
              onChange={handleOnChange}
            />
            <InputField
              id="standard-read-only-input"
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
          </Grid>
        </Grid>

        {/* Junior Remarks */}

        {(user.role === "junior" || user.role === "senior") && (
          <Fragment>
            <Grid item xs={12} md={4} lg={4}>
              <InputField
                className="remark-field-background"
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
                className="remark-field-background"
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
                className="remark-field-background"
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
          </Fragment>
        )}
        {/* Auditor Remarks */}
        {(user.role === "auditor" || user.role === "senior") && (
          <Fragment>
            <Grid item xs={12} md={4} lg={4}>
              <InputField
                className="auditorRemark-field-background"
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
                className="auditorRemark-field-background"
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
                className="auditorRemark-field-background"
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
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default AssetInfoFields;
