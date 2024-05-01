import React, { useState } from 'react'

const AddressCard = () => {
  
  return (
    <div className='p-2 d-flex gap-3'>
      {[1,2,3].map((eachAddr) =>{
        return(

        <div className='card w-25'>
          <div className='align-items-baseline d-flex'>

            <input type="radio" id="html" name="fav_language" value="HTML" style={{"width":"20px"}} className="mx-2 mt-3"/>
            <div>
            <p className='mb-0 fw-bold'>addr1</p>
            <p className='mb-1 fs-14'>addr2</p>
            <span className='text-capitalize mb-3 text-secondary' style={{"overflow-wrap":"break-word","font-size":"12px"}}>D.NO.1-101,GROUND FLOOR,MADHAPUR VILLAGE,SHERILINGAMPALLY MADAL,Rangareddy  </span>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default AddressCard