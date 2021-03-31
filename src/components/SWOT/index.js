//Accumalation of DSM Model
import React from 'react';
import SWOT from '../SWOT/table';
import DSMImg from '../../images/DSM.jpg';
import './index.css';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

export default function SWOTinput () {
    const classes = useStyles();

    return(
        <div className='space'>
            <h1>SWOT Analysis for </h1>
            <Grid style = {{textAlign: 'center'}}>    
                <TextField 
                    margin="normal" 
                    autoFocus
                    inputProps={{min: 0, style: { textAlign: 'center' }}} 
                    InputProps={{ className: classes.inputRoot }}
                />
            </Grid>
            <img 
                className='image' 
                src={DSMImg} 
                alt="Decision Support Model" 
            />
            <SWOT />
            <br></br>
            <Grid style = {{textAlign: 'center', padding: '50px'}} >
                <StyledButton
                onClick={() => window.print()} >
                    Print this out!
                </StyledButton>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    inputRoot: {
      fontSize: theme.typography.pxToRem(24),
      letterSpacing: "0.03333em",
      lineHeight: 1.66,
      alignItems: 'center',
    },
    instructions: {
        fontSize: theme.typography.pxToRem(24),
        letterSpacing: "0.03333em",
        lineHeight: 1.66,
        alignItems: 'left',
    }
  }));

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      fontSize: '1.5rem',
    },
    label: {
        textTransform: 'capitalize',
    },
    
})(Button);
