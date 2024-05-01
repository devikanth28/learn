import React, { useState } from 'react'
import OtpInput from './OtpInput';

const PhoneOtpLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtp, setShowOtp] = useState(false)


    const handlePhoneNumber = (e) => {
        const val = e?.target?.value;
        setPhoneNumber(val);
    }

  const handlePhoneSubmit = (e) => {
        e.preventDefault();
        const phoneRegx = /[^0-9]/g;
        if(phoneNumber.length < 10 || phoneRegx.test(phoneNumber)){
            alert("Invalid Phone Number");
            return;
        }
        setShowOtp(!showOtp)
    }

    const onOtpSubmit = (otp) => {
        console.log("OTP Sent Successfully!")
    }
  return (
    <div>
        {!showOtp ? 
        <form onSubmit={()=>{}}>
            <input type="text" onChange={(e)=>{handlePhoneNumber(e)}} placeholder="please enter phone number"/>
            <button onClick={(e)=>{handlePhoneSubmit(e)}}>Send OTP</button>
        </form> : <div>
            <p>Enter OTP {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
            </div>}
    </div>
  )
}

export default PhoneOtpLogin