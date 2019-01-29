import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBkvp9ifqDeJNPNCH-0PK5QxZpNyZxxjrE",
    authDomain: "burguer-queen-b6057.firebaseapp.com",
    databaseURL: "https://burguer-queen-b6057.firebaseio.com",
    projectId: "burguer-queen-b6057",
    storageBucket: "burguer-queen-b6057.appspot.com",
    messagingSenderId: "393144218466"
  };
  const firebaseConf = firebase.initializeApp(config);
  let firestore;

  firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      firestore = firebase.firestore();
  })
  .catch(function(err) {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

  


  export default firebaseConf;
  export {firestore};