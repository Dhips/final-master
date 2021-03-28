//Importance and Ranking of the Performance Indicators in the DSM 
import React from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  label: {
    fontWeight: 'bold',
    fontSize: '20px',
    paddingBottom: '10px',
    paddingTop: '10px',
  },
  point : {
    textAlign: 'center',
  }
}));

function SwitchesGroup() {
  const [state, setState] = React.useState({
    finance1: true,
    finance2: true,
    timeline1: true,
    product1: true,
    product2: true,
    brand1: true,
    brand2: true,
    human1: true,
    production1: true,
    production2: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.label}>Finance</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={state.finance1} onChange={handleChange} name="finance1"/>}
                label="Profit Margin" className={classes.point}
              />
              <FormControlLabel
                control={<Switch checked={state.finance2} onChange={handleChange} name="finance2"/>}
                label="Sales Volume Projection" 
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.label}>Timeline</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={state.timeline1} onChange={handleChange} name="timeline1"/>}
                label="Overdue Tasks(%)" 
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.label}>Product Performance</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={state.product1} onChange={handleChange} name="product1" />}
                label="Failure Rate" 
              />
              <FormControlLabel
                control={<Switch checked={state.product2} onChange={handleChange} name="product2"/>}
                label="Customer Complaints" 
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.label}>Brand Performance</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={state.brand1} onChange={handleChange} name="brand1" />}
                label="Market Share" 
              />
              <FormControlLabel
                control={<Switch checked={state.brand2} onChange={handleChange} name="brand2" />}
                label="Sales Volume Projection" 
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.label}>Human Resource</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={state.human1} onChange={handleChange} name="human1"/>}
                label="Capacity Allocation" 
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.label}>Production</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={state.production1} onChange={handleChange} name="production1" />}
                label="Energy Consumption" 
              />
              <FormControlLabel
                control={<Switch checked={state.production2} onChange={handleChange} name="production" />}
                label="Rework Percentage" 
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default SwitchesGroup;

