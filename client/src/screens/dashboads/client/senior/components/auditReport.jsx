import React, { Component, Fragment } from "react";
import {
  Typography,
  Container,
  Box,
  withStyles,
  Button,
  Grid
} from "@material-ui/core";

import {
  getReportsData,
  getReportsDataVerifiedOnly
} from "services/getReportsData";

const styles = {
  boxBorder: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    opacity: "1",
    padding: "15px"
  },
  content: {
    flexGrow: 1,
    overflow: "auto"
  }
};

class AuditReport extends Component {
  state = {
    reportsData: [],
    verifiedOnly: []
  };

  async componentDidMount() {
    const { data: reportsData } = await getReportsData();
    const { data: verifiedOnly } = await getReportsDataVerifiedOnly();
    this.setState({ reportsData, verifiedOnly });
  }

  getAssetsCount() {
    return this.state.reportsData.map(item => {
      return (
        <Fragment>
          <p>
            {item._id} : {item.count}
          </p>
        </Fragment>
      );
    });
  }

  getAssetsVerifiedStatus() {
    return this.state.verifiedOnly.map(item => {
      return (
        <Fragment>
          {item._id ? (
            <p>Verified : {item.count}</p>
          ) : (
            <p>Not Verified : {item.count}</p>
          )}
        </Fragment>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid>
          <main className={classes.content}>
            <Container maxWidth="lg">
              <br />
              <Box className={classes.boxBorder}>
                <Fragment>
                  <Typography component="h5" variant="h5">
                    Audit Reports
                  </Typography>
                </Fragment>
                <br />
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="h6" component="h6">
                      Assets count by category
                    </Typography>
                    <div>{this.getAssetsCount()}</div>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="h6">
                      Assets count verificaton status
                    </Typography>
                  </Grid>
                  <div>{this.getAssetsVerifiedStatus()}</div>
                </Grid>
              </Box>
              <br />
            </Container>
          </main>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AuditReport);
