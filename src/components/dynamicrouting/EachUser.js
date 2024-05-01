import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const EachUser = (props) => {
    const [user, setUser] = useState([]);
    const {userId} = useParams();
    useEffect(()=>{
        getEachUser();
    },[])
    console.log("params", userId);
    const getEachUser = async () => {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const result = await response.json();
        console.log(result);
        setUser([result])
    }
  return (
    <div>
        { 
            user && user?.map((eachUser)=>{
                return(
                    <div className='card shadow p-2 text-center col-3'>
            <p>{eachUser.id}</p>
            <span>{eachUser.firstName}</span>
            <img src={eachUser.image} alt={eachUser.lastName} height="40px" width="40px"/>
        </div>
                )
            })  
        }
       
    </div>
  )
}

export default EachUser