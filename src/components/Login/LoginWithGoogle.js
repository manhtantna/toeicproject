import React, { Component } from 'react'
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
var config = {
        apiKey: "AIzaSyA9BuUMSF7hWXxiwIIxuijL5cRvExXG4TM",
        authDomain: "mytoeic-20ebf.firebaseapp.com",
        databaseURL: "https://mytoeic-20ebf.firebaseio.com",
        projectId: "mytoeic-20ebf",
        storageBucket: "mytoeic-20ebf.appspot.com",
        messagingSenderId: "205301818749"
      };
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
class LoginWithGoogle extends Component {
    constructor(props){
        super(props)
        this.state = {isSignedIn : false}
        
    }
    uiConfig = {
            signInFlow: "popup",
            signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID],
            callbacks: {
              signInSuccess: () => false
            }
          }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user })
        })
    }
    render() {
    return (
        <div>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}
export default LoginWithGoogle;