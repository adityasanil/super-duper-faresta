import React, { Fragment, Component } from "react";
import { Grid } from "@material-ui/core";
import InputField from "components/form/inputField";
import {
  assetInfoArray,
  juniorRemarksArray,
  auditorRemarksArray
} from "./fieldsArray";

class AssetInfoFields extends Component {
  state = {
    readStatus: false
  };

  componentDidMount() {
    const { user } = this.props;
    if (user.role !== "senior") {
      this.setState({ readStatus: !this.state.readStatus });
    }
  }

  render() {
    const { handleOnChange, assetData, user } = this.props;
    const { readStatus } = this.state;
    return (
      <Fragment>
        <Grid container spacing={3}>
          {assetInfoArray.map(item => {
            return (
              <Grid item xs={6} md={4} lg={3}>
                <InputField
                  id="standard-read-only-input"
                  value={assetData[item.value]}
                  helperText={item.helperText}
                  InputProps={{ readOnly: readStatus }}
                  name={item.value}
                  onChange={handleOnChange}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* Junior Remarks */}
        {(user.role === "junior" || user.role === "senior") && (
          <Fragment>
            <Grid container spacing={3}>
              {juniorRemarksArray.map(item => {
                return (
                  <Grid item xs={12} md={12} lg={4}>
                    <InputField
                      className="remark-field-background"
                      id="standard-read-only-input"
                      placeholder="Add Remarks if any"
                      onChange={handleOnChange}
                      value={assetData[item.value]}
                      name={[item.value]}
                      InputProps={{ readOnly: !readStatus }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Fragment>
        )}

        {/* Auditor Remarks */}
        {(user.role === "auditor" || user.role === "senior") && (
          <Fragment>
            <Grid container spacing={3}>
              {auditorRemarksArray.map(item => {
                return (
                  <Grid item xs={12} md={12} lg={4}>
                    <InputField
                      className="auditorRemark-field-background"
                      id="standard-read-only-input"
                      placeholder="Add Remarks if any"
                      value={assetData[item.value]}
                      onChange={handleOnChange}
                      name={item.value}
                      InputProps={{ readOnly: !readStatus }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default AssetInfoFields;
