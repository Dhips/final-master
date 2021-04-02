//Allows authenticated users to access password change and password forget options
import React, {useState} from 'react';
//import { withFirebase } from '../Firebase/firebase';
import {storage} from "../Firebase/firebase";
import './index.css';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetLink } from '../PasswordForget';
import { PasswordChangeLink } from '../PasswordChange';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => ( 
          <div>
            <div>
              <h1 className='ha'>Account</h1>
              <Profile />
              <PasswordForgetLink />
              <h4 style={{margin:'10px', fontSize: '1.5vw', marginTop:'15px', marginBottom: '15px'}}>or</h4>
              <PasswordChangeLink />
            </div>
          </div>
        )} 
    </AuthUserContext.Consumer>
);

function Profile() {
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
  
    function handleChange(e) {
      setFile(e.target.files[0]);
    }
  
    function handleUpload(e) {
      e.preventDefault();
      const uploadTask = storage.ref(`/images/${file.name}`).put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setFile(null);
            setURL(url);
          });
      });
    }
  
    return (
      <div className="button">
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleChange} />
          <br></br>        
          <img src={url} alt=""width="30%" align="middle"/>
          <Grid style = {{textAlign: 'center'}}>                                          
            <StyledButton
                disabled={!file}
                type="submit">
                    Set as Picture
            </StyledButton>
           </Grid>  
        </form>

      </div>
    );
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

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);

/*
function ProfilePicture(){
    const onFileChange = (e) => {
        const file = e.target.files[0]
        const storageRef = withFirebase.storage().ref()
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            console.log("Uploaded file", file.name)
        })
    }
    
    const onSubmit = (e) => {
    e.preventDefault()
    }

    return (
        <div>
            <form>
                <input type="file" onChange={onCHange} />
                <input type="text" name="username" placeholder="NAME" />
                <button>Submit</button>
            </form>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}
*/