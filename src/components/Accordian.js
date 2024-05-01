import React, { useState } from 'react'

const Accordian = () => {
    const [isOpen, setOpen]=useState(false);
    function person(fName, lName){
        console.log(fName, lName)
    }
    setInterval(()=>{
        person("Devi","Kanth")
    },50)
  return (
      <React.Fragment>
          {/* <div onClick={()=>(setOpen(!isOpen))}>Accordian</div>
          {isOpen && <p>it is opened</p>} */}
      </React.Fragment>
  )
}

export default Accordian