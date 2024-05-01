import React, { useEffect, useState } from 'react'

const useDebounce = (delay, val) => {
    const [inputValue, setInputValue] = useState(val)
    useEffect(()=>{
        let debounceId = setTimeout(()=>{
            setInputValue(val);
        }, delay);
        return () => clearInterval(debounceId);
    },[val])

  return {inputValue}
  
}

export default useDebounce