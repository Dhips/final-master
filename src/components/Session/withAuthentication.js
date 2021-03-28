import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

// Initialize null authUser state
const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                authUser: null,
            };
        }

 //onAuthStateChange to get current user state from firebase. Refershes whenever firebase user state is changed
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
                },
            );
        }

 // componentWillUnmount to prevent memory leaks
        componentWillUnmount(){
            this.listener();
        }
       
        render() {
            return (
                <AuthUserContext.Provider value ={this.state.authUser}>
                    <Component {...this.props} />;
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;