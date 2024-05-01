import React, { useEffect, useRef, useState } from 'react'

const Otp = () => {
    const [values, setValues] = useState(['', '', '', '']);
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      console.log("Values",newValues)
      return newValues;
    });

    if (value && index < inputRefs.current.length - 1) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1].focus();
    }
  };

  const renderInputs = () => {
    const inputs = [];

    for (let i = 0; i < 4; i++) {
      const isActive = activeInput === i;

      inputs.push(
        <input
          key={i}
          ref={(ref) => (inputRefs.current[i] = ref)}
          type="text"
          maxLength={1}
          value={values[i]}
          onChange={(e) => handleInputChange(e, i)}
          onKeyDown={(e) => handleInputKeyDown(e, i)}
          style={{
            border: isActive ? '2px solid blue' : '1px solid gray',
          }}
        />
      );
    }

    return inputs;
  };

  return <div>{renderInputs()}</div>;
}

export default Otp