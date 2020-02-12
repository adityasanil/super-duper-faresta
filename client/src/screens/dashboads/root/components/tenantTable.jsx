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
        minWidth: 750,
    },

    tableHeader: {
        fontWeight: 'bold',
        fontSize: 16
    }
};

class TenantTable extends Component{
  render(){    
    const {tenantList, classes} = this.props
    console.log(tenantList);
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" size="medium">
            <TableHead>
            <TableRow>
                <TableCell className={classes.tableHeader}>Name</TableCell>
                <TableCell align="center" className={classes.tableHeader}>Email</TableCell>
                <TableCell align="center" className={classes.tableHeader}>Contact</TableCell>
                <TableCell align="center" className={classes.tableHeader}>Company Name</TableCell>
                <TableCell align="center" className={classes.tableHeader}>Organization Email</TableCell>
                <TableCell align="center" className={classes.tableHeader}>Pan Number</TableCell>

            </TableRow>
            </TableHead>
            <TableBody>
            {tenantList.map(function(item, i) {
                return (
                    <React.Fragment>
                        <TableRow key={item._id}>
                        <TableCell component="th">
                            {item.name}
                        </TableCell>
                        <TableCell align="center"><a href={"mailto:" + item.email}>{item.email}</a></TableCell>
                        <TableCell align="center">{item.contact}</TableCell>
                        <TableCell align="center">{item.companyName}</TableCell>
                        <TableCell align="center"><a href={"mailto:" + item.orgEmail}>{item.orgEmail}</a></TableCell>
                        <TableCell align="center">{item.panNumber}</TableCell>
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
export default withStyles(styles)(TenantTable);
