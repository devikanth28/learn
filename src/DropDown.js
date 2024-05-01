import React, { useState } from 'react'

const DropDown = () => {
    //let SuperType = ["cars","countrys","IPLTeams"]
    const [superTypeValue, setSuperTypeValue] = useState(undefined)
    let supTypes = [
        {"cars": ["audi","scoda","Benz"]},
        {"countrys":["India","china","uk"]},
        {"IPLTeams":["SRH","RCB","MI","CSK"]}
    ]
  return (
      <React.Fragment>

    <label for="superType">Choose a Type:</label>

    <select name="superType" id="superType" onChange={(e)=>{setSuperTypeValue(e.target.value)}}>
        {supTypes.map((item)=>{
            return(
                <option>{Object.keys(item)}</option>
            )
        })}
    </select>
    {superTypeValue}
    <label for="supTypes">Choose a {superTypeValue}:</label>
    <select name="supType" id="supType">
        {supTypes.map((eachObj)=>{
           if(superTypeValue in eachObj){
               return (
                   <React.Fragment>
                      {Object.values(eachObj).map((item)=>{
                        return  item.map((ele)=>{
                              return(
                                  <React.Fragment>
                                      <option>{ele}</option>
                                      </React.Fragment>
                              )
                          })
                      })}
                   </React.Fragment>
               )
           }
            
        })}
    </select>
      </React.Fragment>
  )
}

export default DropDown