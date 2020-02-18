import React, { Component, Fragment } from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import JsonTable from "ts-react-json-table";
import Fullscreen from "react-full-screen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

class TabularView extends Component {
  state = {
    isFull: false
  };

  goFull = () => {
    this.setState({ isFull: !this.state.isFull });
  };
  exitFull = () => {
    this.setState({ isFull: !this.state.isFull });
  };

  render() {
    const { data } = this.props;
    const { isFull } = this.state;
    return (
      <Fragment>
        <Grid>
          <Grid item>
            <IconButton onClick={this.exitFull}>
              <FullscreenIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Fullscreen
              enabled={isFull}
              onChange={isFull => this.setState({ isFull })}
            >
              <div
                className="test-table"
                id="screen"
                style={{ backgroundColor: "white" }}
              >
                {isFull && (
                  <IconButton onClick={this.exitFull}>
                    <FullscreenExitIcon />
                  </IconButton>
                )}
                <JsonTable className="table-test" rows={data} />
              </div>
            </Fullscreen>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default TabularView;
