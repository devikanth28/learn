import React, { useEffect, useState } from 'react'

const UseLocalStorage = (key, initialValue) => {
    let storedValue = localStorage.getItem(key);

    const [value, setValue] = useState(storedValue ? JSON.parse(storedValue):initialValue);

    useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
    },[key, value]);


  return {value, setValue}
    
  
}

export default UseLocalStorage