import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Menu, Dropdown, Icon } from 'antd';
//import LoginWithGoogle from './../Login/LoginWithGoogle'
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
const menu = (
  <Menu>
    <Menu.Divider />
    <Menu.Item key="0">
    <button onClick={() => firebase.auth().signOut()}><Icon type="poweroff" /></button>
    </Menu.Item>
  </Menu>
);
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
class User extends Component {
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
        <Grid item>
        <Dropdown overlay={menu} trigger={['click']}>
          { this.state.isSignedIn? 
            <IconButton color="inherit">
                <Avatar src={firebase.auth().currentUser.photoURL} />
            </IconButton>: 
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />

          }
            
        </Dropdown>                
        </Grid>
      </div>
    )
  }
}
export default User;