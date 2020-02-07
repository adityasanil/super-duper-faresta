import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./components/home";
import DashboardLayout from "./dashboardLayout";
import Guide from "components/guide";
import ViewData from "../common/viewData/viewData";
import QRCodeList from "../common/qrCodeList";
import NotFound from "components/pageNotFound";
import EditProfile from "components/editProfile";
import AssetList from "../common/viewData/guiView/assetList";
import AssetInformation from "../common/viewData/guiView/assetInformation";

class JuniorUserDS extends Component {
  state = {};
  render() {
    return (
      <DashboardLayout user={this.props.user}>
        <Switch>
          <Route path="/dashboard/guide" component={Guide} />
          <Route path="/dashboard/qrList" component={QRCodeList} />
          <Route
            path="/dashboard/viewData/:category/:id"
            render={props => (
              <AssetInformation user={this.props.user} {...props} />
            )}
          />
          <Route path="/dashboard/viewData/:category" component={AssetList} />
          <Route
            path="/dashboard/viewdata"
            render={props => <ViewData user={this.props.user} {...props} />}
          />
          <Route path="/dashboard/editprofile" component={EditProfile} />
          <Route exact path="/dashboard/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </DashboardLayout>
    );
  }
}

export default JuniorUserDS;
