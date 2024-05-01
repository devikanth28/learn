import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
const PrivateRoute = ({ component: Component, loggedIn, onLogout, ...rest }) => {
    
    return (
      <Route
        {...rest}
        render={(props) =>
          loggedIn ? <Component {...props} onLogout={onLogout} /> : <Redirect to="/login" />
        }
      />
    );
  };

//   usage

const handleLogin = () => {
    // Assume a successful login sets loggedIn to true
    // setLoggedIn(true);
  };

  const handleLogout = () => {
    // setLoggedIn(false);
  };

 {/* Protected Route */}
 <PrivateRoute
 path="/dashboard"
//  component={Dashboard}
//  loggedIn={isloggedIn}
 onLogout={handleLogout}
/>

  export default PrivateRoute