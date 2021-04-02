//Reset Password
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes'
import './index.css';
import MyDSM from '../../images/MyDSM.jpg';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const PasswordForgetPage = () => (
    <div>
        <PasswordForgetForm />
    </div>
);

//Set constants initial state
const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.withFirebase
            .doPassowordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const{ email, error } = this.state;

        const isInvalid = email === '';

        return (
            <div>
            <img className ="pictur" src={MyDSM} alt="MyDSM" />

            <h1 className ="ha">Forgot Your Password?</h1>

            <Container maxWidth='sm'>
                <div>

                    <form onSubmit={this.onSubmit}>
                        <TextField 
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoFocus
                        />
                        <Grid style = {{textAlign: 'center'}}>                                          
                            <StyledButton 
                                disabled={isInvalid} 
                                type="submit">
                                Reset My Password
                            </StyledButton>
                        </Grid> 
                {error && <p>{error.message}</p>}
                    </form> 
                </div>
            </Container>
            </div>
        );
    }
}

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

const PasswordForgetLink = () => (
    <div>
        <p style={{ alignText:'center', justifyContent: 'center',  fontSize:'1.5vw', marginBottom: '5px', paddingLeft:'42%', paddingTop:'10px' }}>
        <Link to={ROUTES.PASSWORD_FORGET}><b>Forgot Your Password?</b></Link>
        </p>
    </div>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };