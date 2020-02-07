import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";

import BrandLogo from "assets/images/brand/brand.png";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appBarColor: {
    backgroundColor: "#009933"
  },
  brandLink: {
    color: "#fff",
    textDecoration: "none"
  },
  titleLeft: {
    fontSize: "18px",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  titleRight: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  brandLogo: {
    width: "100%",
    maxWidth: "46px",
    height: "45px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white"
  },
  textStyle: {
    textDecoration: "none",
    color: "white"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarColor}>
        <Toolbar>
          <IconButton>
            <Link to="/">
              <img
                src={BrandLogo}
                alt="Brand logo"
                className={classes.brandLogo}
              />
            </Link>
          </IconButton>

          <Typography className={classes.titleLeft} variant="h6" noWrap>
            Fixed Assets Manager
          </Typography>

          <div className={classes.grow} />
          <div>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              <Link className={classes.textStyle} to={"/login"}>
                Log in
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
