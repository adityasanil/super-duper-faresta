import React, { Fragment } from "react";
import {
  Typography,
  Box,
  withStyles,
  Grid,
  Container,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";

import { registerSenior } from "services/createCallsRoot";
import OrgDataFields from "./orgDataFields";
import Form from "components/form/form";

import * as Sentry from "@sentry/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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

class Organizations extends Form {
  state = {
    data: {
      companyName: "",
      panNumber: "",
      orgEmail: "",
      contact: "",
      designation: "",
      address: "",
      name: "",
      email: "",
      userType: "",
      role: ""
    }
  };

  onSubmit = async () => {
    // Call to backend to create organisation database

    const { data } = this.state;
    const register = await registerSenior(data);
    console.log(register);
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <ToastContainer autoClose={1500} closeButton={false} />
        <div>
          <main className={classes.content}>
            <Container maxWidth="lg">
              <br />
              <Box className={classes.boxBorder}>
                <div>
                  <Typography component="h5" variant="h5">
                    Create organization
                  </Typography>
                </div>
                <br />
                <div>
                  <OrgDataFields
                    onSubmit={this.handleSubmit}
                    onChange={this.handleOnChange}
                  />
                </div>
              </Box>
              <Box>
                <Grid>{/* <Table /> */}</Grid>
              </Box>
            </Container>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Organizations);
