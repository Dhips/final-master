//To allow unauthenticated users to sign in
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './index.css';
import MyDSM from '../../images/MyDSM.jpg';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const SignInPage = () => (
<div>
    <SignInForm />
    <PasswordForgetLink />
    <h4 style={{margin:'10px', fontSize: '1.5vw', marginTop:'15px', marginBottom: '15px'}}>or</h4>
    <SignUpLink />
</div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email,password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email,password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push( ROUTES.HELP );
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    render() {
        const{ email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
             <Container maxWidth='sm'>
                <div className = "input">
                    <img src={MyDSM} className= "pictur" alt="MyDSM"/>

                    <h1 className = "ha">Sign In</h1>          
 
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
                        <TextField 
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            variant="outlined"
                            margin="normal"
                            type="password" 
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            autoFocus
                        />
                    <Grid style = {{textAlign: 'center', paddingTop: '10px'}}>
                        <StyledButton
                            disabled={isInvalid} 
                            type="submit" >
                            Sign In
                        </StyledButton>
                    </Grid>
                    {error && <p>{error.message}</p>}
                    </form>
                </div>
            </Container>
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

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm };
