import React, { Component, Fragment } from "react";
import ProgressBar from "./progressBar";

class ImageUpload extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <label>
            Upload file:
            <input
              type="file"
              onChange={this.props.onChangeHandler}
              name="file"
              accept="image/*"
              required
            />
          </label>
          <br />
          <ProgressBar progressValue={this.props.loaded} />
          <button type="button" onClick={this.props.onClickHandler}>
            Upload
          </button>
        </form>
      </Fragment>
    );
  }
}

export default ImageUpload;
