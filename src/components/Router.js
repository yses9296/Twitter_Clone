import React, { memo } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home'
import Profile from '../routes/Profile'
import Auth from '../routes/Auth'
import Navigation from './Navigation';

const AppRouter = memo(({isLoggedIn, userObj, refreshUser}) => {

  return (
    <>
      <Router basename='/'>
        {isLoggedIn && <Navigation/>}
        <Routes>
          {isLoggedIn 
          ? (
            <>
            <Route path='/' element={<Home userObj={userObj}/>}/>
            <Route path='/profile' element={<Profile userObj={userObj} refreshUser={refreshUser}/>}/>
            </>
          )
          : (
            <Route path='/' element={<Auth/>} />
          )}
        </Routes>
      </Router>
    </>
  );
}
)
export default AppRouter;
