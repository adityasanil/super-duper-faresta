import React, { Component, Fragment } from "react";
import JsonTable from "ts-react-json-table";

class TabularView extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div className="test-table">
          <JsonTable className="table-test" rows={data} />
        </div>
      </Fragment>
    );
  }
}

export default TabularView;
