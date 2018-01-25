const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAvbFyhkM87m-52VGZ7WWP7m2KRUGHjwI4",
    authDomain: "wordbook-94d91.firebaseapp.com",
    databaseURL: "https://wordbook-94d91.firebaseio.com",
    projectId: "wordbook-94d91",
    storageBucket: "wordbook-94d91.appspot.com"
  };
firebase.initializeApp(config);


export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth