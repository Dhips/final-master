//Accumalation of DSM Model
import React from 'react';
import PI from '../PI/PI';
import PITable from '../PI/PITable.js';
//import PIImg from '../../images/PI.jpg';
import './index.css';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

export default function DSM () {
    const classes = useStyles();
//<img className='pictur' src={PIImg} alt="Performance Indicators" />
    return(
        <div className='space'>
            <div style ={{paddingBottom:'10px'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vH9_AFg_Uk8?start=121" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h1>Decision Support Model for </h1>
            <Grid style = {{textAlign: 'center'}}>    
                <TextField 
                    margin="normal" 
                    autoFocus
                    inputProps={{min: 0, style: { textAlign: 'center' }}} 
                    InputProps={{ className: classes.inputRoot }}
                />
            </Grid>
            <br></br>
            <h1 className='ha'>Performance Indicator Selection</h1>
            <h2 className='hb' style = {{padding:'20px'}}>Toggle the PI's on and off to provide yourself a clearer indication of what is important when going forwards</h2>
            <PI />
            <h1 className='ha'>Performance Indicator Ranking</h1>
            <br></br>
            <h2 InputProps={{ className: classes.inputRoot }} className='hb'>For the PI's you marked as important in the section above - Key in a value between 1-5 in the boxes with an '*'</h2>
            <h2 className='hb'>Once you are done, click on the importance ratio to rank them and view the results in the graph below</h2>
            <PITable />
            <Grid style = {{textAlign: 'center', padding: '50px', marginTop: '-100px', paddingTop: '-10px'}} >    
                <StyledButton
                onClick={() => window.print()} >
                    Save/Print this out!
                </StyledButton>
            <h3 className='hc'style = {{ paddingTop: '20px',  paddingLeft: '14%', paddingRight: '5%'}}>More detailed Background and Literary PI Documentation can be found <Link to="../documentation">Documentation</Link></h3>
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


