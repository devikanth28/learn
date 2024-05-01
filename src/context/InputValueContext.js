import React, { useContext, useState } from 'react'
import { CountContext } from './MyContext'

const InputValueContext = () => {
    const {inputValue, addButton} = useContext(CountContext)
    const [typeValue, setTypedValue] = useState()
    const handleAddButton =(value) =>{
        addButton(value);
        setTypedValue("");
    }
  return (
      <React.Fragment>
          <input type="text" value={typeValue} onChange={(e)=>{setTypedValue(e.target.value)}}/>
          <button onClick={()=>{handleAddButton(typeValue)}}>Add</button>
          input Value {inputValue}
      </React.Fragment>
  )
}

export default InputValueContext