import React, { Fragment } from "react";
import { Button, Grid, Box, Container } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import AssetInfoFields from "./assetInfoFields";
import Form from "components/form/form";
import http from "services/httpServices";
import { getUser } from "services/getToken";
import ImageUpload from "components/imageUpload";
import { getAssetById } from "services/getAssets";
import QRCodeGenerator from "components/qrCodeGenerator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "config.js";
import { sendEditedData } from "services/sendAssetData";
import { deleteAsset } from "services/deleteAsset";
import ModalImage from "react-modal-image";

const imageUploadUrl = config.apiUrl + "/imageUpload";

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
  },
  text: {
    textDecoration: "none"
  }
};

class AssetInformation extends Form {
  state = {
    id: "",
    selectedFile: null,
    loaded: 0,
    data: {
      remarkJunior_1: "",
      remarkJunior_2: "",
      remarkJunior_3: "",
      remarkAuditor_1: "",
      remarkAuditor_2: "",
      remarkAuditor_3: ""
    }
  };

  async componentDidMount() {
    try {
      const category = this.props.match.params.category;
      const assetId = this.props.match.params.id;
      const { data: assetDataFrom } = await getAssetById(category, assetId);

      this.setState({
        data: assetDataFrom[0],
        id: assetId
      });
    } catch (error) {}
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  printOrder = () => {
    const printableElements = document.getElementById("printme").innerHTML;
    const orderHtml =
      "<html><head><title></title></head><body>" +
      printableElements +
      "</body></html>";
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = orderHtml;
    window.print();
    document.body.innerHTML = oldPage;
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    data.append("id", this.state.id);
    http.post(imageUploadUrl, data, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
        });
      }
    });
  };

  handleSave = async () => {
    const data = { ...this.state.data };

    try {
      const result = await sendEditedData(data);
      toast.info("Updated successfully");
    } catch (error) {
      toast.error("Update failed!");
    }
  };

  goback = () => {};
  deleteAssetById = async () => {
    const data = await deleteAsset(this.state.id);
    console.log(data);
    if (data.status === 200) {
      toast.success("Asset deleted");
      setTimeout(() => {
        this.props.history.goBack();
      }, 2000);
    }
  };

  render() {
    const data = JSON.parse(getUser());
    const dbName = data.orgDatabase;
    const {
      particulars,
      id,
      other,
      category,
      location,
      quantity,
      vat
    } = this.state.data;
    const image = this.state.data.imageUri;
    const { user } = this.props;

    return (
      <Fragment>
        <ToastContainer autoClose={1500} closeButton={false} />
        <Container maxWidth="lg">
          <Box>
            <Grid container direction="column" justify="center">
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  md={8}
                  lg={8}
                  alignItems="center"
                  alignContent="center"
                >
                  <div id="printme">
                    <QRCodeGenerator
                      id={id}
                      particulars={particulars}
                      other={other}
                      location={location}
                      quantity={quantity}
                      category={category}
                      vat={vat}
                      keyValue={dbName}
                    />
                  </div>
                  <button onClick={() => this.printOrder()}>Print</button>
                  <div className="upload-btn-style">
                    <ImageUpload
                      onChangeHandler={this.onChangeHandler}
                      onClickHandler={this.onClickHandler}
                      loaded={this.state.loaded}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <span>
                    <div>
                      <ModalImage small={image} large={image} />
                    </div>
                    <div>
                      <span>Image Preview</span>
                    </div>
                  </span>
                </Grid>
              </Grid>
              <Grid>
                <AssetInfoFields
                  assetData={this.state.data}
                  handleOnChange={this.handleOnChange}
                  user={user}
                />
              </Grid>
              <br />
              <Grid container direction="row" justify="space-between">
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SaveIcon />}
                    onClick={this.handleSave}
                    disabled={
                      user.role === "junior" || user.role === "auditor"
                        ? true
                        : false
                    }
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={this.deleteAssetById}
                    variant="contained"
                    color="primary"
                  >
                    Delete Asset
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <br />
      </Fragment>
    );
  }
}

export default AssetInformation;
