import React, { Component, Fragment } from "react";
import {
  Typography,
  Container,
  Box,
  withStyles,
  Grid
} from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getUsers } from "services/getUsers";
import UserTable from "./userTable";

const styles = {
  boxBorder: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    opacity: "1",
    padding: "15px"
  },
  content: {
    flexGrow: 1,
    overflow: "auto"
  }
};

class UsersList extends Component {
  state = { userList: [] };

  async componentDidMount() {
    const db = this.props.user.orgDatabase;
    const { data: userList } = await getUsers(db);
    this.setState({ userList });
  }

  render() {
    const { classes } = this.props;
    const { userList } = this.state;

    return (
      <Fragment>
        <ToastContainer auatoClose={1500} closeButton={false} />
        <Grid>
          <main className={classes.content}>
            <Container maxWidth="lg">
              <br />
              <Box className={classes.boxBorder}>
                <div>
                  <Typography component="h5" variant="h5">
                    Users list
                  </Typography>
                  <br />
                  <Typography component="p" variant="p">
                    Total number of users: <b>{userList.length}</b>
                  </Typography>
                  <br />
                </div>
                <React.Fragment>
                  <UserTable userList={userList} />
                </React.Fragment>
                <br />
              </Box>
              <br />
            </Container>
          </main>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(UsersList);
