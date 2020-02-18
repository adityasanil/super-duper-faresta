import React, { Component, Fragment } from "react";
import ProgressBar from "./progressBar";

class ImageUpload extends Component {
  render() {
    const { loaded, onChangeHandler, onClickHandler, imageSet } = this.props;
    return (
      <Fragment>
        <form>
          <label>
            Upload file:
            <input
              type="file"
              onChange={onChangeHandler}
              name="file"
              accept="image/*"
              required
            />
          </label>
          {imageSet && <ProgressBar progressValue={loaded} />}
          <br />
          <button type="button" onClick={onClickHandler}>
            Upload
          </button>
        </form>
      </Fragment>
    );
  }
}

export default ImageUpload;
