//Firebase configuration 
import app from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';


//firebase config
const config ={
    apiKey: "AIzaSyDaI4RqLRp8GXmbLsrENAXIGp12_Sb4SOc",
    authDomain: "mydsm1.firebaseapp.com",
    databaseURL: "https://mydsm1-default-rtdb.firebaseio.com",
    projectId: "mydsm1",
    storageBucket: "mydsm1.appspot.com",
    messagingSenderId: "1008193562724",
    appId: "1:1008193562724:web:6f2a5c7a703e365ab11771",
    measurementId: "G-DT53JPJG48",
};

firebase.initializeApp(config);

const storage = firebase.storage()

const db = firebase.firestore()
db.settings({ timestampInSnapshots: true })

firebase.analytics();

//Initializing the authentication API then initializing the firebase database
class Firebase {
    constructor(){
       // app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }
// Auth API
// Create User 
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

//SignIn
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

//SignOut
    doSignOut= () => this.auth.signOut();

//Password Reset
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

//User API
//Get reference by UID
    user = uid => this.db.ref(`users/${uid}`);

//Get reference to all users
    users = () => this.db.ref('users');
}

export default Firebase;

export { storage, firebase };