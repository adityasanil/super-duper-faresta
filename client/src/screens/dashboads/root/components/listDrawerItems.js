import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="Root" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/">
      <ListItemIcon>
        <HomeIcon style={{ color: "#26a69a" }} />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/IAM">
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="IAM" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/organizations">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Organizations" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/Reports">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);
