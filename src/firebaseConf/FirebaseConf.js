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

  export default firebaseConf;