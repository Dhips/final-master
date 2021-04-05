//Accumalation of DSM Model
import React from 'react';
import SWOT from '../SWOT/table';
//import DSMImg from '../../images/DSM.jpg';
import './index.css';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

export default function SWOTinput () {
    const classes = useStyles();

//<img className='pictur' src={DSMImg} alt="Decision Support Model" />
    return(
        <div className='space'>
            <div class="center" style ={{paddingBottom:'10px'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vH9_AFg_Uk8?start=63" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h1 className='ha'>SWOT Analysis for </h1>
            <Grid style = {{textAlign: 'center'}}>    
                <TextField 
                    margin="normal" 
                    autoFocus
                    inputProps={{min: 0, style: { textAlign: 'center' }}} 
                    InputProps={{ className: classes.inputRoot }}
                />
            </Grid>
            <SWOT />
            <br></br>
            <Grid style = {{textAlign: 'center'}} >
                <StyledButton
                onClick={() => window.print()} >
                    Save/Print this out!
                </StyledButton>
                <h3 className='hc'style = {{ paddingTop: '20px',  paddingLeft: '5%', paddingRight: '5%'}}>More detailed SWOT Analaysis, Background and Literary SWOT Documentation can be found in <Link to="../documentation">Documentation</Link></h3>
                <h2 className='hb' style = {{ paddingTop: '20px',  paddingLeft: '6%', paddingRight: '5%'}}>Need <Link to="../help">help</Link> using this page?</h2>
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
