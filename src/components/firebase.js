import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyA9BuUMSF7hWXxiwIIxuijL5cRvExXG4TM",
    authDomain: "mytoeic-20ebf.firebaseapp.com",
    databaseURL: "https://mytoeic-20ebf.firebaseio.com",
    projectId: "mytoeic-20ebf",
    storageBucket: "mytoeic-20ebf.appspot.com",
    messagingSenderId: "205301818749"
  };
  firebase.initializeApp(config);
export default firebase;
export const database = firebase.database();