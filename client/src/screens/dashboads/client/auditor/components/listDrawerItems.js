import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import PageviewIcon from "@material-ui/icons/Pageview";


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
     selected={selectedIndex === 1}
     onClick={event => handleListItemClick(event, 1)}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem
     button
     component={Link} to="/dashboard/viewData"
     selected={selectedIndex === 2}
     onClick={event => handleListItemClick(event, 2)}>
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="View Data" />
    </ListItem>
  </div>
  );
}