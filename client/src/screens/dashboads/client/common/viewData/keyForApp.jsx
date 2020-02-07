import React, { Fragment } from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

import Crypto from "crypto-js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import Form from "../../../../../components/form/form";
import { sendMail } from "../../../../../services/sendMail";

class KeyForApp extends Form {
  state = {
    data: {
      email: ""
    },
    key: "",
    keyToDecrypt: ""
  };

  componentWillMount() {
    const { userData } = this.props;
    const key = userData.orgDatabase;
    const keyToDecrypt = Crypto.AES.encrypt(key, "ff").toString();
    this.setState({ key: key, keyToDecrypt: keyToDecrypt });
  }

  onSubmit = async () => {
    const email = this.state.data.email;
    const key = this.state.keyToDecrypt;
    sendMail(email, key);
    toast.success("Email sent");
  };

  render() {
    const { keyToDecrypt } = this.state;

    return (
      <Fragment>
        <Grid>
          <ToastContainer autoClose={1500} closeButton={false} />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
             <Grid item xs={12} md={7} lg={7}>
              <Typography>Key: {keyToDecrypt}</Typography>
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <form onSubmit={this.handleSubmit} className="email-field-align">
                <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email to auditor"
                  size="small"
                  onChange={this.handleOnChange}
                  required
                />
                <Button
                  className="send-email-button-style"
                  style={{ marginLeft: "10px" }}
                  variant="contained"
                  color="secondary"
                  type="submit"
                  endIcon={<SendRoundedIcon />}
                >
                  Send
                </Button>
              </form>
              </Grid>
            </Grid>
          </Grid>
      </Fragment>
    );
  }
}

export default KeyForApp;
