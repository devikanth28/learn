import React, { useState } from 'react'

const ArrayJoin = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
      const inputPhoneNumber = e.target.value;
      if (inputPhoneNumber?.length >= 3) {
        // const numericOnly = inputPhoneNumber.replace(/\D/g, '');
  
        // Format the phone number to (123) 456-7890 format
        const formattedPhoneNumber = `(${inputPhoneNumber.slice(0, 3)}) ${inputPhoneNumber.slice(3, 6)}-${inputPhoneNumber.slice(6)}`;
        setPhoneNumber(formattedPhoneNumber);
      } 
    };
  
    return (
      <input
        type="number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="(123) 456-7890"
      />
    );
}

export default ArrayJoin