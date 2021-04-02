import React from 'react';
import './index.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MuiTableCell from "@material-ui/core/TableCell";

const TableCell = withStyles({
  root: {
    
  }
})(MuiTableCell);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    boxShadow: "none",
    marginInline: 10,
  },
}));

function createData(no, strengths, weakness, opportunities, threats) {
  return {no, strengths, weakness, opportunities, threats};
}

const rows = [
  createData( '1.' , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/> , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/>),
  createData( '2.' , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/> , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/>),
  createData( '3.' , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/> , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/>),
  createData( '4.' , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/> , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/>),
  createData( '5.' , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/> , <TextField margin="normal" fullWidth autoFocus/>, <TextField margin="normal" fullWidth autoFocus/>),
];

export default function SWOT() {
  const classes = useStyles();

  const toplayer = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: '1.5vw',
    fontWeight: "800"
  };

  const sidelayer = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "1vw",
    fontWeight: "800",
    paddingLeft: "10px"
  };


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead >
          <TableRow className="header" >
            <TableCell style={toplayer}>No.</TableCell>
            <TableCell align="center" style={toplayer}>Strength</TableCell>
            <TableCell align="center" style={toplayer}>Weakness</TableCell>
            <TableCell align="center" style={toplayer}>Opportunities</TableCell>
            <TableCell align="center" style={toplayer}>Threats</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={sidelayer}>{row.no} </TableCell>
              <TableCell align="center">{row.strengths}</TableCell>
              <TableCell align="center">{row.weakness}</TableCell>
              <TableCell align="center">{row.opportunities}</TableCell>
              <TableCell align="center">{row.threats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}


