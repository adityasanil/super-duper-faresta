import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "components/pageNotFound";
import EditProfile from "components/editProfile";

import AddUsers from "./components/addUsers/addUsers";
import UsersList from "./components/userList";
import ViewData from "../common/viewData/viewData";
import AuditReport from "./components/auditReport";
import UploadData from "./components/uploadData";
import Home from "./components/home";
import DashboardLayout from "./dashboardLayout";
import Guide from "components/guide";
import AssetList from "../common/viewData/guiView/assetList";
import AssetInformation from "../common/viewData/guiView/assetInformation";
import QRCodeList from "../common/qrCodeList";

class SeniorUserDS extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <DashboardLayout user={user}>
        <Switch>
          <Route path="/dashboard/qrList" component={QRCodeList} />
          <Route
            path="/dashboard/viewData/:category/:id"
            render={props => <AssetInformation user={user} {...props} />}
          />
          <Route path="/dashboard/viewData/:category" component={AssetList} />
          <Route
            path="/dashboard/viewData"
            render={props => <ViewData user={user} {...props} />}
          />
          <Route path="/dashboard/uploadData" component={UploadData} />
          <Route path="/dashboard/auditReport" component={AuditReport} />
          <Route
            path="/dashboard/addUsers"
            render={props => <AddUsers user={user} {...props} />}
          />
          <Route
            path="/dashboard/usersList"
            render={props => <UsersList user={user} {...props} />}
          />
          <Route path="/dashboard/guide" component={Guide} />
          <Route exact path="/dashboard/editprofile" component={EditProfile} />
          <Route exact path="/dashboard/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </DashboardLayout>
    );
  }
}

export default SeniorUserDS;
