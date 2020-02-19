import React, { Component, Fragment } from "react";
import { Grid, Button } from "@material-ui/core";
import HowToRegIcon from '@material-ui/icons/HowToReg';
import InputField from "components/form/inputField";

class OrgDataFields extends Component {
  state = {};
  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <Fragment>
        <form onSubmit={onSubmit}>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <InputField
                  required
                  id="companyName"
                  label="Name of organization"
                  name="companyName"
                  onChange={onChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <InputField
                  required
                  id="panNumber"
                  label="Pan Number"
                  name="panNumber"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <InputField
                  required
                  id="orgEmail"
                  label="Company Email"
                  name="orgEmail"
                  type="email"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <InputField
                  required
                  id="contact"
                  label="Contact number"
                  name="contact"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <InputField
                  required
                  id="address"
                  label="Address"
                  name="address"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <InputField
                  required
                  id="name"
                  label="Name of Senior"
                  name="name"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <InputField
                  required
                  id="email"
                  label="Senior Email"
                  type="email"
                  name="email"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <InputField
                  required
                  id="designation"
                  label="Designation"
                  name="designation"
                  onChange={onChange}
                />
              </Grid>
              {/* <Grid item xs={12} md={3} lg={4}>
                <FormControl variant="outlined" className="select-width">
                  <InputLabel id="demo-simple-select-outlined-label">
                    User Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    labelWidth="70"
                    name="userType"
                    required
                    onChange={onChange}
                  >
                    <MenuItem value={null}></MenuItem>
                    <MenuItem value="client">Client</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}
              <Grid item xs={12} md={3} lg={3}>
                <select
                  className="select-button-padding select-button-org-styles"
                  name="role"
                  onChange={onChange}
                  required
                >
                  <option disabled selected value={null}>
                    Role
                  </option>
                  <option value="senior">Senior</option>
                </select>
              </Grid>

              <Grid item xs={12} md={3} lg={3}>
                <select
                  className="select-button-padding select-button-org-styles"
                  name="userType"
                  onChange={onChange}
                  required
                >
                  <option disabled selected value={null}>
                    User type
                  </option>
                  <option value="client">Client</option>
                </select>
              </Grid>

              <Grid item xs={12} lg={12}>
                <div>
                  <Button 
                   startIcon={<HowToRegIcon />}
                   variant="contained" 
                   color="secondary"
                   type="submit"
                   className="create-button-icon">
                    Register
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default OrgDataFields;
