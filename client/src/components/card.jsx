import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";

import { Link } from "react-router-dom";

const styles = {
  card: {
    minWidth: 220,
    marginLeft: "24px",
    width: "85%",
    height: "135px",
    marginTop: "22px",
    "@media only screen and (max-width: 600px)": {
      width: "85%",
      marginTop: "15px",
      marginLeft: "25px",
      height: "auto",
      marginBottom: "10px"
    }
  },
  title: {
    fontSize: 26,
    fontFamily: "Oleo Script",
    color: "#009933",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "40px"
  },
  textDeco: {
    textDecoration: "none"
  }
};

class CardComponent extends Component {
  render() {
    const { classes, item, category } = this.props;

    return (
      <Grid item lg={3} sm={6} md={4} xs={12}>
        <Card className={classes.card} elevation={4}>
          <Link
            to={`/dashboard/viewData/${category}`}
            className={classes.textDeco}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h2"
                  gutterBottom
                >
                  {item}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(CardComponent);
