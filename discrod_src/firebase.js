import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC63XI-IClbrI3XvrlrKE2j3qpWAF_V_SI",
    authDomain: "kingzad-test.firebaseapp.com",
    databaseURL: "https://kingzad-test.firebaseio.com",
    projectId: "kingzad-test",
    storageBucket: "kingzad-test.appspot.com",
    messagingSenderId: "874541603204",
    appId: "1:874541603204:web:78b5d128646770be7e65d1",
    measurementId: "G-CZZJY28HY0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;