import React, { useEffect } from 'react';
import './App.css';
import SideBar from './SideBar';
import Chat from './Chat';
import Login from './Login';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser) {
        // the uer is logged in
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
      }else{
        // the user is logged out
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="App">
      {
        user ? (
          <>
            <SideBar />
            <Chat />
          </>
        ):(
          <Login />
        )
        }
    </div>
  );
}

export default App;
