import React, { Component, Fragment } from "react";
import {
  List,
  ListItem,
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { getAssetsCategory } from "services/getAssets";

class AssetList extends Component {
  state = {
    result: [],
    category: ""
  };

  async componentDidMount() {
    try {
      const category = this.props.match.params.category;
      const { data } = await getAssetsCategory(category);
      this.setState({ result: data, category: category });
    } catch (error) {}
  }

  get assetsList() {
    const { result, category } = this.state;
    return (
      <Fragment>
        <Typography component="p" variant="p">
          Total: <b>{result.length}</b>
        </Typography>
        <List className="list-style">
          {result.map(item => {
            return (
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {item.particulars}
                </ExpansionPanelSummary>
                <ListItem key={item._id} className="asset-expansion-list-style">
                  <Link
                    key={item._id}
                    to={`/dashboard/viewData/${category}/${item._id}`}
                  >
                    <ExpansionPanelDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={6}>
                          Location : {item.location}
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                          Invoice No : {item.invoice_number}
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                          Invoice Amount : {item.total_invoice_amount}
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                          Vendor Name : {item.vendor_name}
                        </Grid>
                      </Grid>
                    </ExpansionPanelDetails>
                  </Link>

                  <br />
                </ListItem>
              </ExpansionPanel>
            );
          })}
        </List>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <div>{this.assetsList}</div>
      </Fragment>
    );
  }
}

export default AssetList;
