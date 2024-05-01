import React, { useState } from 'react'
import useDebounce from './useDebounce'

const DebounceUsed = () => {
    const [name, setName] = useState("");
    const {inputValue} = useDebounce(2000, name);
  return (
    <div>
        <input type="text" placeholder='enter name' onChange={(e)=>{setName(e.target.value)}}/>
        {inputValue}
    </div>
  )
}

export default DebounceUsed