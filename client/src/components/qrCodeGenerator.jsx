import React, { Component, Fragment } from "react";

import QRCode from "qrcode.react";
import Crypto from "crypto-js";

class QRCodeGenerator extends Component {
  state = {
    data: ""
  };

  crypt = (data, key) => {
    const value = "flookup@" + Crypto.AES.encrypt(data, key).toString();
    return value;
  };

  render() {
    const { id, keyValue } = this.props;

    console.log(id);
    return (
      <Fragment>
        <QRCode
          value={this.crypt(id, keyValue)}
          renderAs={"svg"}
          level={"L"}
          version={40}
        />
      </Fragment>
    );
  }
}

export default QRCodeGenerator;
