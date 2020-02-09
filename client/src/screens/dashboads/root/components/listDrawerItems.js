import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
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
       selected={selectedIndex === 1}
       onClick={event => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <HomeIcon style={{ color: "#26a69a" }} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
       button
       component={Link} to="/dashboard/IAM"
       selected={selectedIndex === 2}
       onClick={event => handleListItemClick(event, 2)}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="IAM" />
      </ListItem>
      <ListItem
       button
       component={Link} to="/dashboard/organizations"
       selected={selectedIndex === 3}
       onClick={event => handleListItemClick(event, 3)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Organizations" />
      </ListItem>
      <ListItem 
       button
       component={Link} to="/dashboard/Reports"
       selected={selectedIndex === 4}
       onClick={event => handleListItemClick(event, 4)}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
  </div>    
  );
}