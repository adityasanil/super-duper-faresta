import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import NotFound from "components/pageNotFound";
import EditProfile from "components/editProfile";
// import PrivateRoute from "../";
import IAM from "./components/iam";
import Home from "./components/home";
import Reports from "./components/reports";
import DashboardLayout from "./dashboardLayout";
import TenantsList from "./components/tenantsList";
import Organizations from "./components/orgComponents/organizations";

class AdminDashBoard extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <DashboardLayout user={user}>
        <Switch>
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/dashboard/iam" component={IAM} />
          <Route path="/dashboard/reports" component={Reports} />
          <Route path="/dashboard/organizations" component={Organizations} />
          <Route
            path="/dashboard/tenantsList"
            render={props => <TenantsList user={user} {...props} />}
          />
          <Route exact path="/dashboard/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </DashboardLayout>
    );
  }
}

export default AdminDashBoard;
