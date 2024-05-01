import React, { useEffect } from 'react'

const Task = () => {
    // useEffect(() =>{
    //     getReverseObj
        
    // },[])
    const person= {
        fName : "Devi",
        lName : "Kanth",
        add    : "Hyd"
    }
console.log(person)
    const getReverseObj = (personObj) => {
        for(let item in personObj){
            console.log("eachItem",personObj[item].reverse)
        }
    }
    getReverseObj(person)
    return (<>
    
  <div>Task</div>
    </>
  )
}

export default Task