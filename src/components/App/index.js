//Cumlination of all the components in this WebApp
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import PasswordChangePage from '../PasswordChange';
import HelpPage from '../Help';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Archive from '../Archive';
import SWOT from '../SWOT';
import DSM from '../DSM';
import FeedbackPage from '../Feedback';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

//Provides context for the context.consumer in Navigation
const App = () => (
    <Router>
        <div>
            <Navigation />

            <br></br>

            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
            <Route exact path={ROUTES.HELP} component={HelpPage} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
            <Route exact path={ROUTES.ARCHIVE} component={Archive} />
            <Route exact path={ROUTES.SWOT} component={SWOT} />           
            <Route exact path={ROUTES.DSM} component={DSM} />
            <Route exact path={ROUTES.FEEDBACK} component={FeedbackPage} />
        </div>
    </Router>
);

export default withAuthentication(App);