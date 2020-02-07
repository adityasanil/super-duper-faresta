import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PeopleIcon from "@material-ui/icons/People";
import ReceiptIcon from "@material-ui/icons/Receipt";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PageviewIcon from "@material-ui/icons/Pageview";
import HelpIcon from "@material-ui/icons/Help";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CropFreeIcon from "@material-ui/icons/CropFree";

import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/addUsers">
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Users" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/usersList">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users List" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/auditReport">
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Audit Report" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/uploadData">
      <ListItemIcon>
        <CloudUploadIcon />
      </ListItemIcon>
      <ListItemText primary="Upload Assets" />
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

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
