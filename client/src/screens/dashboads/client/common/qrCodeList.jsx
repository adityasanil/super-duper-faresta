import React, { Component, Fragment, lazy, Suspense } from "react";
import {
  Button,
  Typography,
  Box,
  withStyles,
  Container,
  Grid,
  Card
} from "@material-ui/core";

import Print from "react-to-print";
import PrintIcon from "@material-ui/icons/Print";

import Loader from "components/loader";
import { getUser } from "services/getToken";
import { getAllAssets } from "services/getAssets";
import QRCodeGenerator from "components/qrCodeGenerator";

const styles = {
  boxBorder: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    opacity: "1",
    padding: "15px"
  },
  content: {
    flexGrow: 1,
    height: "auto",
    overflow: "auto"
  }
};

class Code extends Component {
  state = {
    assetData: []
  };

  async componentDidMount() {
    const { data } = await getAllAssets();
    this.setState({ assetData: data });
  }

  get QRCodesList() {
    const { description } = this.props;
    const { assetData } = this.state;
    const data = JSON.parse(getUser());
    const dbName = data.orgDatabase;
    return (
      <Fragment>
        <br />
        <br />
        <div id="printme">
          {assetData.map((asset, i) => {
            return (
              <Fragment>
                <div style={description ? null : { paddingLeft: "40px" }}>
                  <Grid container direction="column">
                    <Grid container direction="row">
                      <QRCodeGenerator
                        id={asset._id}
                        particulars={asset.particulars}
                        other={asset.other}
                        location={asset.location}
                        quantity={asset.quantity}
                        vat={asset.vat}
                        category={asset.category}
                        keyValue={dbName}
                      />
                      <Grid
                        style={
                          description
                            ? { paddingLeft: "15px" }
                            : { display: "none" }
                        }
                      >
                        <div>
                          <b>ID:</b> {asset._id}
                        </div>
                        <div>
                          <b>Particulars:</b> {asset.particulars}
                        </div>
                        <div>
                          <b>Category:</b> {asset.category}
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container direction="column">
                      <div>SR: {i}</div>
                    </Grid>
                  </Grid>
                  <br />
                </div>
              </Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <div>{this.QRCodesList}</div>
      </Fragment>
    );
  }
}

class QRCodeList extends Component {
  state = {
    description: true
  };

  setDescription = () => {
    this.setState({ description: !this.state.description });
  };

  render() {
    const { classes } = this.props;
    const { description } = this.state;

    return (
      <Fragment>
        <br />
        <main className={classes.content}>
          <Container maxWidth="lg">
            <br />
            <Box className={classes.boxBorder}>
              {
                <Button
                  onClick={this.setDescription}
                  color="primary"
                  variant="contained"
                >
                  {description ? "Hide description" : "Unhide description"}
                </Button>
              }
              <Print
                trigger={() => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    href="#"
                    style={{ textDecoration: "none", paddingLeft: "20px" }}
                  >
                    <Button
                      className="print-button-font-style"
                      variant="contained"
                      color="secondary"
                    >
                      <PrintIcon />
                      <Typography>&nbsp; Print</Typography>
                    </Button>
                  </a>
                )}
                // onBeforePrint={this.setDescription}
                content={() => this.componentRef}
              />
              <Suspense fallback={<Loader />}>
                <Code
                  ref={el => (this.componentRef = el)}
                  description={this.state.description}
                />
              </Suspense>
            </Box>
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default withStyles(styles)(QRCodeList);
