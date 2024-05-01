import React, { useState, useEffect } from 'react';

const Debounce = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
      const debounceTimer = setTimeout(() => {
          
          console.log(inputValue);
      }, 1000); 
      return () => {
          console.log("debounceTimer", debounceTimer)
          clearTimeout(debounceTimer);
      };
  }, [inputValue]);

  const handleChange = (e) => {
      setInputValue(e.target.value);
  };

  return (
      <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
      />
  );
  }

export default Debounce;
