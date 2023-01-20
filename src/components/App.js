import React, { memo, useEffect, useState } from 'react';
import AppRouter from './Router.js';
import { authService } from'../fBase';
import Footer from './Footer'
import './App.css';
import { updateCurrentUser } from 'firebase/auth';

const App = memo(() => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(()=>{
    authService.onAuthStateChanged ((user) => {
      if(user) {
        setLoggedIn(true);
        setUserObj(user);
      }
      else {
        setLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    })
  },[])
  const refreshUser = async () => {
    await updateCurrentUser(authService, authService.currentUser);
    setUserObj(authService.currentUser)
  }
  return (
    <div>
      { init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser}/> : 'Initializing...'}
      <Footer/>
    </div>
  );
});

export default App;
