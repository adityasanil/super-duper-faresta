import React, { Component, Fragment } from "react";
import { withStyles, Grid } from "@material-ui/core";

import AssetCard from "components/card";
import { getDistinctAssets } from "services/getAssets";

const styles = {
  boxBorder: {
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

class GUIView extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const { data } = await getDistinctAssets();
    this.setState({ data: data });
  }

  get getAssets() {
    const distinctAssets = this.state.data;
    return (
      <Fragment>
        {distinctAssets.map(function(item) {
          return (
            <div
              className="asset-card-font-style"
              key={item.replace(/\W/g, "_")}
            >
              <AssetCard category={item.replace(/\W/g, "_")} item={item}>
                {item}
              </AssetCard>
            </div>
          );
        })}
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <Grid container justify="space-evenly">
          {this.getAssets}
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(GUIView);
