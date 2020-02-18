import React, { Component, Fragment } from "react";

import QRCode from "qrcode.react";
import Crypto from "crypto-js";

class QRCodeGenerator extends Component {
  state = {
    data: ""
  };

  crypt = (data, key) => {
    // console.log("Key: " + key);
    // const keyToDecrypt = Crypto.AES.encrypt(key, "ff").toString();
    const value = "flookup@" + Crypto.AES.encrypt(data, key).toString();
    return value;
  };

  render() {
    const {
      id,
      description,
      location,
      quantity,
      vat,
      category,
      keyValue
    } = this.props;

    return (
      <Fragment>
        <QRCode
          value={this.crypt(
            "ID: " +
              id +
              "\n" +
              "Description: " +
              description +
              "\n" +
              "Category: " +
              category +
              "\n" +
              "Location: " +
              location +
              "\n" +
              "Quantity: " +
              quantity +
              "\n" +
              "VAT: " +
              vat,
            keyValue
          )}
          renderAs={"svg"}
          level={"L"}
          version={40}
        />
      </Fragment>
    );
  }
}

export default QRCodeGenerator;
