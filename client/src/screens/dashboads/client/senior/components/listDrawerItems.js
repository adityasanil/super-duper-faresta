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

export default function ListDrawerItems() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
   <div>
    <ListItem
      button
      component={Link} to="/dashboard/"
      selected={selectedIndex === 0}
      onClick={event => handleListItemClick(event, 0)}
     >
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem
      button
      component={Link} to="/dashboard/addUsers"
      selected={selectedIndex === 1}
      onClick={event => handleListItemClick(event, 1)} >
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Users" />
    </ListItem>
    <ListItem
      button
      component={Link} to="/dashboard/usersList"
      selected={selectedIndex === 2}
      onClick={event => handleListItemClick(event, 2)}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users List" />
    </ListItem>
    <ListItem
      button
      component={Link} to="/dashboard/auditReport"
      selected={selectedIndex === 3}
      onClick={event => handleListItemClick(event, 3)}>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Audit Report" />
    </ListItem>
    <ListItem
      button
      component={Link} to="/dashboard/uploadData"
      selected={selectedIndex === 4}
      onClick={event => handleListItemClick(event, 4)}>
      <ListItemIcon>
        <CloudUploadIcon />
      </ListItemIcon>
      <ListItemText primary="Upload Assets" />
    </ListItem>
    <ListItem
      button
      component={Link} to="/dashboard/viewData"
      selected={selectedIndex === 5}
      onClick={event => handleListItemClick(event, 5)}>
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="View Data" />
    </ListItem>
    <ListItem 
      button
      component={Link} to="/dashboard/qrList"
      selected={selectedIndex === 6}
      onClick={event => handleListItemClick(event, 6)}>
      <ListItemIcon>
        <CropFreeIcon />
      </ListItemIcon>
      <ListItemText primary="QR Codes" />
    </ListItem>
    <ListItem 
      button
      component={Link} to="/dashboard/guide"
      selected={selectedIndex === 7}
      onClick={event => handleListItemClick(event, 7)}>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Guide" />
    </ListItem>
  </div>

  );
}