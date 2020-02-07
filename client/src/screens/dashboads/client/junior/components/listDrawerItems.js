import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import PageviewIcon from "@material-ui/icons/Pageview";
import HelpIcon from "@material-ui/icons/Help";
import CropFreeIcon from "@material-ui/icons/CropFree";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/viewData">
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="View Data" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/qrList">
      <ListItemIcon>
        <CropFreeIcon />
      </ListItemIcon>
      <ListItemText primary="QR Codes" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/guide">
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Guide" />
    </ListItem>
  </div>
);
