import React, { useState } from 'react'

const AutoPopulation = () => {
    const [panNo, setPanNo] = useState();
    const users = [
        { name: 'Devikanth', email: 'devikanth@gmail.com', panNo:'CWZPG5593D'},
        { name: 'AAA', email: 'aaa@gmail.com', panNo:'SDFRTG678HJ'},
        { name: 'BBB', email: 'bbb@gmail.com', panNo:'FRTYH34N'}
    ]
    const findObj = users.find(user => user.panNo === panNo);
    // setUserObject(findObj)
    console.log(findObj,"findObj")
    let name = findObj?.name;
    let email = findObj?.email;
  return (
    <form>
        <label>panNo</label>
        <input type="text" name="panNo" value={panNo} onChange={(e)=>{setPanNo(e.target.value)}} autoComplete='off'/>
        <label>Name</label>
        <input type="text" name="name" value={name ? name : ""}/>
        <label>Email</label>
        <input type="email" name="email" value={email ? email : ""}/>

    </form>
  )
}

export default AutoPopulation