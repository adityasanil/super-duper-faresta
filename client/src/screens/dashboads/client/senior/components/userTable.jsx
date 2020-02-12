import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
    table: {
        minWidth: 650,
    },

    tableHeader: {
        fontWeight: 'bold',
        fontSize: 16
    }
};

class UserTable extends Component{
  render(){    
    const {userList, classes} = this.props
    console.log(userList);
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center" className={classes.tableHeader}>Name</TableCell>
                <TableCell align="center" className={classes.tableHeader}>Email</TableCell>
                <TableCell align="center" className={classes.tableHeader}>Role</TableCell>
                <TableCell align="center" className={classes.tableHeader}>Designation</TableCell>
                <TableCell align="center" className={classes.tableHeader}>Contact</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {userList.map(function(item, i) {
                return (
                    <React.Fragment>
                        <TableRow key={item._id}>
                        <TableCell align="center" component="th" scope="row">
                            {item.name}
                        </TableCell>
                        <TableCell align="center"><a href={"mailto:" + item.email}>{item.email}</a></TableCell>
                        <TableCell align="center">{item.role}</TableCell>
                        <TableCell align="center">{item.designation}</TableCell>
                        <TableCell align="center">{item.contact}</TableCell>
                        </TableRow>
                    </React.Fragment>
                );
                })}  
            </TableBody>
        </Table>
        </TableContainer>
    );
}

}
export default withStyles(styles)(UserTable);
