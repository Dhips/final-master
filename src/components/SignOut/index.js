//To allow the user to sign out using firebase authentication
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);

 /*
export default function withFirebase(SignOutButton){

  const SignOutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignOut}>
      Sign Out
    </button>
  );

  return(
    <Route exact path={ROUTES.LANDING} component={LandingPage} />
  );
}
*/