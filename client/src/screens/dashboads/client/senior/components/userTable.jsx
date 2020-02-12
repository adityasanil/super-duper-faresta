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
                <TableCell className={classes.tableHeader}>Name</TableCell>
                <TableCell className={classes.tableHeader}>Email</TableCell>
                <TableCell className={classes.tableHeader} align="right">Role</TableCell>
                <TableCell className={classes.tableHeader} align="right">Designation</TableCell>
                <TableCell className={classes.tableHeader} align="right">Contact</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {userList.map(function(item, i) {
                return (
                    <React.Fragment>
                        <TableRow key={item._id}>
                        <TableCell component="th" scope="row">
                            {item.name}
                        </TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell align="right">{item.role}</TableCell>
                        <TableCell align="right">{item.designation}</TableCell>
                        <TableCell align="right">{item.contact}</TableCell>
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
