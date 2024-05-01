import React, { useEffect, useState } from 'react'

const NumberRoll = () => {
    const [number, setNumber] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        if (number < 100) {
          setNumber(prevNumber => prevNumber + 1);
        } else {
          clearInterval(interval);
        }
      }, 100); 
  
      return () => clearInterval(interval);
    }, [number]);
  return (
    <div>NumberRoll {number}</div>
  )
}

export default NumberRoll