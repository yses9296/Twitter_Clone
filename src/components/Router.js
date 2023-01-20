import React, { memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home'
import Profile from '../routes/Profile'
import Auth from '../routes/Auth'
import Navigation from './Navigation';

const AppRouter = memo(({isLoggedIn, userObj, refreshUser}) => {

  return (
    <>
      <Router>
        {isLoggedIn && <Navigation/>}
        <Routes>
          {isLoggedIn 
          ? (
            <>
            <Route exact path='/' element={<Home userObj={userObj}/>}/>
            <Route exact path='/profile' element={<Profile userObj={userObj} refreshUser={refreshUser}/>}/>
            </>
          )
          : (
            <Route exact path='/' element={<Auth/>} />
          )}
        </Routes>
      </Router>
    </>
  );
}
)
export default AppRouter;
