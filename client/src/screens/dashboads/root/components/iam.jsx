import React, { Fragment } from "react";
import InputField from "components/form/inputField";
import {
  Typography,
  Box,
  withStyles,
  Grid,
  Button,
  Container
} from "@material-ui/core";

import Form from "../../../../components/form/form";

const styles = {
  boxBorder: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    opacity: "1",
    padding: "15px"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  }
};

class IAM extends Form {
  state = {};
  render() {
    const { classes } = this.props;
    const { onSubmit, onChange } = this.props;

    return (
      <Fragment>
        <div>
          <Typography component="h5" variant="h5">
            Identity and Access Management
          </Typography>
          <Fragment>
            <div>
              <main className={classes.content}>
                <Container maxWidth="lg">
                  <div>
                    <Typography component="h5" variant="h5"></Typography>
                  </div>
                  <br />
                  <br />
                  <Box className={classes.boxBorder}>
                    <form onSubmit={this.onSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={6}>
                        <InputField
                         required
                         id="Name"
                         label="Name"
                         name="Name"
                         onChange={onChange}
                         autoFocus
                         />
                        </Grid>
                        <Grid item xs={12} md={8} lg={3}>
                        <InputField
                         required
                         id="startdate"
                         label="Created At"
                         name="Created at"
                         onChange={onChange}
                        
                         />
                        </Grid>
                        <Grid item xs={12} md={8} lg={3}>
                        <InputField
                         required
                         id="enddate"
                         label="Ended At"
                         name="Ended at"
                         onChange={onChange}
                         />
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                        <InputField
                         required
                         id="email"
                         label="Email"
                         name="Email"
                         onChange={onChange}
                         />
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                        <InputField
                         required
                         id="name"
                         label="Name"
                         name="Name"
                         onChange={onChange}
                         />
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                        <InputField
                         required
                         id="status"
                         label="Status"
                         name="Status"
                         onChange={onChange}
                         />
                        </Grid>
                        <Grid item xs={12} md={8} lg={6} className="iam-select-style">
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
                        <Grid item xs={12} lg={12}>
                          <div>
                            <Button variant="contained" color="secondary">
                              Create
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                  <br />
                  <Box>
                    <Grid>{/* <Table /> */}</Grid>
                  </Box>
                </Container>
              </main>
            </div>
          </Fragment>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(IAM);
