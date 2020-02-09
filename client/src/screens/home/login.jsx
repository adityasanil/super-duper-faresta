import React, { Fragment } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "assets/css/loginstyles.css";

import { login } from "services/auth";
import Logo from "assets/images/brand/logo.png";
import { connect } from "services/assetDbCall";
import Form from "components/form/form";
import InputField from "components/form/inputField";
import Particles from "components/loginAnimation";

const useStyles = {
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    color: "#009933",
    backgroundColor: "#fff"
  },
  form: {
    width: "100%",
    justify: "flex-end",
    height: "100%"
  },
  submit: {
    backgroundColor: "#009933",
    color: "white"
  }
};

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    }
  };

  onSubmit = async () => {
    try {
      const { data } = this.state;
      const result = await login(data.email, data.password);
      const { orgDatabase } = jwtDecode(result.data);
      const connectData = await connect(orgDatabase);
      if (result.status === 200 && connectData.status === 200) {
        window.location = "/dashboard/";
      }
    } catch (error) {
      return null;
    }
  };

  render() {
    return (
      <Fragment>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12} md={3} lg={3} direction="column">
            <div direction="column" className="login-card-align">
              <div direction="column" className="login-logo-styles">
                <img className="login-brand-styles" src={Logo} alt={"Logo"} />
              </div>
              <Grid direction="column" className="login-body-styles">
                <Typography
                  className="login-header"
                  component="h1"
                  variant="h5"
                >
                  Log in to your account
                </Typography>
                <div className="login-textbox-style">
                  <form className={useStyles.form} onSubmit={this.handleSubmit}>
                    <div className="login-field-style">
                      <InputField
                        required
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        autoFocus
                        onChange={this.handleOnChange}
                        type="email"
                        size="small"
                      />
                    </div>
                    <div className="login-field-style">
                      <InputField
                        required
                        name="password"
                        placeholder="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handleOnChange}
                        size="small"
                      />
                    </div>
                    <div className="login-button-align">
                      <Grid container spacing={3} direction="row">
                        <Grid item xs={12} md={6} lg={6}>
                          <Button
                            className="login-button-style"
                            type="submit"
                            fullWidth
                            variant="contained"
                          >
                            Log In
                          </Button>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          lg={6}
                          className="forgot-grid"
                        >
                          <Link
                            className="forgot-link-style"
                            to={"/forgotpassword"}
                          >
                            Forgot password?
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  </form>
                </div>
              </Grid>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            lg={9}
            className="login-background"
            direction="column"
          >
            <Particles />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default Login;
