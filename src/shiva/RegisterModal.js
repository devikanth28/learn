import React, { useState } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
const RegisterModal = (props) => {
    const [userName, setUserName]=useState(undefined);
    const [userPassword, setUserPassword]=useState(undefined);
    const [userType, setUserType] = useState(undefined);
    // const [isValid, setIsValid] = useState(true);
    const handleRegister = () =>{
      let userRegObj = {"userName":userName, "password":userPassword, "role":userType}
        console.log(userRegObj);

    }
console.log(userType)
  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setMobileNumber(value);
  //   validateMobileNumber(value);
  // };

  // const validateMobileNumber = (value) => {
  //   const mobileNumberRegex = /^[0-9]{10}$/;

  //   const isValidMobileNumber = mobileNumberRegex.test(value);

  //   setIsValid(isValidMobileNumber);
  // };

  const handleUserType = (e) =>{
    let finalUser = e.target.id == 'owner'? 'O' : 'B'
    setUserType(finalUser)
  }

  return (
    <Modal isOpen={props.isOpen} className='modal-dialog-centered'>
        <ModalHeader>Hello User Welcome to Reservation</ModalHeader>
        <ModalBody>
      <div className='mb-3'>
        <label className='w-25'>User Name </label>
        <input type="text" onChange={(e)=>{setUserName(e.target.value)}} /><br/>
      </div>
        <div>
          <label className='w-25'>Password</label>
          {/* {renderInputs()} */}
          <input type="password" onChange={(e) => setUserPassword(e.target.value)} minLength="6" maxlength="10" />
        </div>
        <div className='text-center mt-3'>
      {/* <label htmlFor="mobileNumber">Mobile Number:</label>
      <input
        type="tel"
        id="mobileNumber"
        name="mobileNumber"
        value={mobileNumber}
        onChange={handleInputChange}
      /> */}
      <input type="radio" name="userType" value="Owner" id="owner" className='me-2' onChange={(e)=>{handleUserType(e)}}/>
      <label htmlFor="owner" className='me-5'>Owner</label>

      <input type="radio" name="userType" value="Buyer" id="buyer" className='me-2' onChange={(e)=>{handleUserType(e)}} defaultChecked/>
      <label htmlFor="buyer" className='me-5'>Buyer</label>

      {/* {!isValid && <p className="error">Please enter a valid 10-digit mobile number.</p>} */}
    </div>
    </ModalBody>
    <ModalFooter><button className='btn btn-outline-danger'>Register</button></ModalFooter>
        </Modal>
  )
}

export default RegisterModal