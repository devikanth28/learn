import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({length, onSubmit}) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);
    console.log("otp", inputRefs);

    useEffect(()=>{
        if(inputRefs?.current[0]){
            inputRefs?.current[0].focus();
        }
    },[]);

    const handleChange = (index, e) => {
        const val = e?.target.value;
        const newOtp = [...otp];
        newOtp[index] = val.substring(val.length - 1);
        // setOtp([...otp, val]);
        setOtp(newOtp)
        if(index < length - 1 && inputRefs.current[index + 1]){
            inputRefs?.current[index + 1].focus();
        }
        const combinedOtp = newOtp.join("");
        if(combinedOtp.length === length){
            onSubmit(combinedOtp)
        }
        console.log("combinedOtp", combinedOtp)
    }

    const handleClick = (index) => {

    }

    const handleKeyDown = (index, e) => {
        // if(e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]){
        //     inputRefs?.current[index - 1].focus()
        // }
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
          ) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
          }
    }
  return (
    <div>
        {otp.map((value, index)=>{
            return(
                <input type="text"
                key={index}
                ref={(input)=>(inputRefs.current[index] = input)}
                value={value}
                onChange={(e)=>handleChange(index, e)}
                onClick = {(e)=>handleClick(index)}
                onKeyDown = {(e)=>handleKeyDown(index, e)}
                className="otpInput"
                />
            )
        })}
    </div>
  )
}

export default OtpInput