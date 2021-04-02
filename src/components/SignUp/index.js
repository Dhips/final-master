//Captures user information for the Sign Up
import React, { Component } from 'react';
import { Link, withRouter}  from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './index.css';
import MyDSM from '../../images/MyDSM.jpg';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Using a higher order componenet via FirebaseContext.Consumer
// Instead of Render Prop
const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>    
);

const INITIAL_STATE = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
 
    onSubmit = event => {
        const { username, email, passwordOne} = this.state;

//this.props.history.push for proected route for authenticated users
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
//Create a user in your Firebase realtime database
            this.props.firebase
                .user(authUser.user.uid)
                .set({
                    username,
                    email,
                })    
                .then(() => { 
                    this.setState({ ...INITIAL_STATE});
                    this.props.history.push(ROUTES.HOME);
                })
                .catch(error => {
                    this.setState({ error });
                });
            })
    .catch(error => {
        this.setState({ error });      
    });

//prevent default is to prevent natural browser reloading
        event.preventDefault();
    };

// To update the local state of the component
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

//To capture information in the render method of the component
//Error message appears when there is an error in conditional rendering
// Validation done by the isInvalid function to enable or disbable the submit button
    render(){
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

//To allow the user to signin if all the details are filled up
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return(
            <Container maxWidth='sm' >
                <div>
                <img className= "pictur" src={MyDSM} alt="MyDSM" />                    

                    <h1 className= "ha">Sign Up</h1> 
                    
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <TextField 
                            name="username"
                            value={username}
                            onChange={this.onChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            autoFocus
                        />
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
                            name="passwordOne"
                            value={passwordOne}
                            onChange={this.onChange}
                            variant="outlined"
                            margin="normal"
                            type="password"  
                            required
                            fullWidth
                            id="passwordOne"
                            label="Password"
                            autoFocus
                        />  
                        <TextField 
                            name="passwordTwo"
                            value={passwordTwo}
                            onChange={this.onChange}
                            variant="outlined"
                            margin="normal"
                            type="password" 
                            required
                            fullWidth
                            id="passwordTwo"
                            label="Reconfirm Password"
                            autoFocus
                        />             
                        <Grid style = {{textAlign: 'center', paddingTop: '10px'}}>                                          
                            <StyledButton 
                                disabled={isInvalid} 
                                type="submit">
                                    Sign Up
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
      paddingBlock: '10px',
    },
    label: {
        textTransform: 'capitalize',
    },
    
})(Button);

const SignUpLink = () => (
    <div>
        <p style={{ alignText:'center', fontSize:'1.5vw', marginBottom: '5px', paddingLeft:'43.5%'}}>
        <Link to={ROUTES.SIGN_UP}><b>Create An Account!</b></Link>   
        </p>
    </div>
);

 const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
