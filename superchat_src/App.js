import React from 'react';
import './App.css';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';



firebase.initializeApp({
  apiKey: "AIzaSyC63XI-IClbrI3XvrlrKE2j3qpWAF_V_SI",
  authDomain: "kingzad-test.firebaseapp.com",
  databaseURL: "https://kingzad-test.firebaseio.com",
  projectId: "kingzad-test",
  storageBucket: "kingzad-test.appspot.com",
  messagingSenderId: "874541603204",
  appId: "1:874541603204:web:78b5d128646770be7e65d1",
  measurementId: "G-CZZJY28HY0"
})

const auth= firebase.auth();
const [user] = useAuthState(auth)

function App() {
  return (
    <div className="app">
      <header className="app__header">

      </header>
      <section>
        {user? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

export default App;
