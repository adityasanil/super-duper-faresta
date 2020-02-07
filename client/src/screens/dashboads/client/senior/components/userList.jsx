import React, { Component, Fragment } from "react";
import {
  Typography,
  Container,
  Box,
  withStyles,
  Grid
} from "@material-ui/core";

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
    //height: "100vh",
    overflow: "auto"
  }
};

class UsersList extends Component {
  state = { user: [] };

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <ToastContainer autoClose={1500} closeButton={false} />
        <Grid>
          <main className={classes.content}>
            <Container maxWidth="lg">
              <br />
              <Box className={classes.boxBorder}>
                <div>
                  <Typography component="h5" variant="h5">
                    Users list
                  </Typography>
                </div>
                <br />
              </Box>
              <br />
            </Container>
          </main>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(UsersList);
