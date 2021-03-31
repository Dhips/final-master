//To change password
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './index.css';
import MyDSM from '../../images/MyDSM.jpg';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const PasswordChangePage = () => (
    <div>
        <PasswordChangeForm />
    </div>
);

//Set constants initial state
const INITIAL_STATE ={
    passwordOne: '',
    passwordTwo:'',
    error: null,
};

class PasswordChangeFormBase extends Component{
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error =>{
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
        const { passwordOne, passwordTwo, error} = this.state;
    
        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';

        return(
            <Container maxWidth='sm'>
                <div>
                    <img className ="images" src={MyDSM} alt="MyDSM" />

                    <h1 className ="title">Password Change</h1> 

                    <form onSubmit={this.onSubmit}>
                        <TextField 
                            name="passwordOne"
                            value={passwordOne}
                            onChange={this.onChange}
                            variant="outlined"
                            margin="normal"
                            type="password" 
                            required
                            fullWidth
                            id="password"
                            label="New Password"
                            autoFocus
                        />
                        <TextField 
                            name="passwordTwo"
                            value={passwordTwo}
                            onChange={this.onChange}
                            variant="outlined"
                            margin="normal"
                            type="password" 
                            fullWidth
                            id="password"
                            label="Confirm New Password"
                            autoFocus
                        />
                        <Grid style = {{textAlign: 'center'}}>                                          
                            <StyledButton 
                                disabled={isInvalid} 
                                type="submit">
                                    Change Password
                                </StyledButton>
                        </Grid> 
                        {error && <p>{error.message}</p>}
                    </form>
                </div>
            </Container>
        );
    }
}

//Styling
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

const PasswordChangeLink = () => (
    <div>
        <p className="link">
        <Link to={ROUTES.PASSWORD_CHANGE}><b>Change Your Password?</b></Link>
        </p>
    </div>
);

export default PasswordChangePage;

const PasswordChangeForm = withFirebase(PasswordChangeFormBase);

export { PasswordChangeForm, PasswordChangeLink };
