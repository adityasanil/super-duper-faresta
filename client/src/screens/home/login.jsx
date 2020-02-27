import React, { Fragment } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { login } from "services/auth";
import Form from "components/form/form";
import { connect } from "services/assetDbCall";
import Logo from "assets/images/brand/logo.png";
import Particles from "components/loginAnimation";
import InputField from "components/form/inputField";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    }
  };

  onSubmit = async () => {
    const { data } = this.state;
    try {
      const result = await login(data.email, data.password);
      const { orgDatabase } = jwtDecode(result.data);
      const connectData = await connect(orgDatabase);
      if (result.status === 200 && connectData.status === 200) {
        window.location = "/dashboard/";
      }
    } catch (ex) {
      return null;
    }
  };

  render() {
    return (
      <Fragment>
        <Grid container direction="row">
          <Grid item xs={12} md={4} lg={3}>
            <Grid container direction="row" justify="center">
              <Grid item lg={10} xs={10}>
                <img className="login-brand-styles" src={Logo} alt={"Logo"} />
              </Grid>
              <Grid item lg={10} xs={10}>
                <Typography component="h1" variant="h5">
                  Log in to your account
                </Typography>
              </Grid>
              <Grid item lg={10} xs={10}>
                <form onSubmit={this.handleSubmit}>
                  <InputField
                    required
                    id="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    autoFocus={true}
                    onChange={this.handleOnChange}
                    type="email"
                    size="small"
                    margin="normal"
                  />
                  <InputField
                    required
                    name="password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleOnChange}
                    size="small"
                    margin="normal"
                  />
                  <Grid container direction="row" justify="space-between">
                    <Fragment>
                      <Grid item>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          style={{
                            backgroundColor: "#009933",
                            color: "white"
                          }}
                        >
                          Log In
                        </Button>
                      </Grid>
                      <Grid item>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "blue"
                          }}
                          to={"/forgotpassword"}
                        >
                          Forgot password?
                        </Link>
                      </Grid>
                    </Fragment>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={9} md={8}>
            <div className="login-background">
              <Particles />
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default Login;
