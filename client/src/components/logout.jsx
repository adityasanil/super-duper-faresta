import { Component } from "react";
import { logoutUser } from "services/auth";

class Logout extends Component {
  componentDidMount() {
    logoutUser();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
