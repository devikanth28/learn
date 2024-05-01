import React from 'react'
import Login from './Login';

const AuthenticationChecked = (Component) => {

    let isAuthenticated = true;


    const VerifyAuthentication = (props)=>{
        if(isAuthenticated){
            return <Component {...props}/>
        }
        else{
            return <Login/>
        }
    }

  return VerifyAuthentication;
}

export default AuthenticationChecked