import React, { useState } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
const LoginModal = (props) => {
    const toggle = () => {props.setToggle(!props.isOpen)}
    const [userName, setUserName]=useState(undefined);
    const [userPassword, setUserPassword]=useState(undefined);
    const handleLogin = () =>{
        console.log(userName,"UserName",userPassword);
    }
  return (
    <Modal isOpen={props.isOpen} className='modal-dialog-centered' toggle={toggle}>
        <ModalHeader toggle={toggle}>Hello User Welcome to Reservation</ModalHeader>
        <ModalBody>
      <div className='mb-3'>
        <label className='w-25'>User Name </label>
        <input type="text" onChange={(e)=>{setUserName(e.target.value)}} /><br/>
      </div>
        <div>
          <label className='w-25'>Password</label>
          <input type="text" onChange={(e) => setUserPassword(e.target.value)} minLength="6" maxlength="10" />
        </div>
    </ModalBody>
    <ModalFooter><button className='btn btn-outline-danger'>Login</button></ModalFooter>
        </Modal>
  )
}

export default LoginModal