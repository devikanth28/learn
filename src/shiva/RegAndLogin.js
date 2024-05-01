import React, { useState } from 'react'
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const RegAndLogin = () => {
    const [islogin, setLogin]=useState(false)
    const [isRegister, setRegister]=useState(false);
  return (
    <>
        <button onClick={()=>{setLogin(!islogin)}}>Login</button>
        <button onClick={()=>{setRegister(!isRegister)}}>Register</button>
        {islogin && <LoginModal isOpen={islogin} setToggle={setLogin}/>}
        {isRegister && <RegisterModal isOpen={isRegister}/>}
    </>
  )
}

export default RegAndLogin