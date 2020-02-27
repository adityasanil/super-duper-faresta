import React, { Component, Fragment, Suspense } from "react";
import {
  Button,
  Typography,
  Box,
  withStyles,
  Container,
  Grid
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
    const { des } = this.props;
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
                <div style={des ? null : { paddingLeft: "40px" }}>
                  <Grid container direction="column">
                    <Grid container direction="row">
                      <QRCodeGenerator id={asset._id} keyValue={dbName} />
                      <Grid
                        className="qr-info-list-style"
                        style={
                          des ? { paddingLeft: "15px" } : { display: "none" }
                        }
                      >
                        <div>
                          <b>ID:</b> {asset._id}
                        </div>
                        <div>
                          <b>Description:</b> {asset.description}
                        </div>
                        <div>
                          <b>Category:</b> {asset.category}
                        </div>
                      </Grid>
                    </Grid>
                    <Grid className="sr-no-style" container direction="column">
                      <Typography variant="p" component="h3">
                        SR: {i}
                      </Typography>
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
    des: true
  };

  setDescription = () => {
    this.setState({ des: !this.state.des });
  };

  render() {
    const { classes } = this.props;
    const { des } = this.state;

    return (
      <Fragment>
        <br />
        <main className={classes.content}>
          <Container maxWidth="lg">
            <br />
            <Box className={classes.boxBorder}>
              {
                <Button
                  className="button-font-style"
                  onClick={this.setDescription}
                  color="primary"
                  variant="contained"
                >
                  {des ? "Hide description" : "Unhide description"}
                </Button>
              }

              <Print
                trigger={() => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    href="#"
                    className="button-font-style"
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
                content={() => this.componentRef}
              />

              <Suspense fallback={<Loader />}>
                <Code
                  ref={el => (this.componentRef = el)}
                  des={this.state.des}
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
