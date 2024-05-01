import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        getUsers();
    },[]);
    const getUsers = async () => {
        const response = await fetch("https://dummyjson.com/users");
        const result = await response.json();
        console.log(result);
        setUserList(result.users);

    }
  return (
      <>
    {userList && <div className='row g-3 m-0 p-3'>
        {userList.map((eachUser)=>{
            return(
        <Link to={`/eachUser/${eachUser.id}`}><div className='card shadow p-2 text-center col-3'>
            <p>{eachUser.id}</p>
            <span>{eachUser.firstName}</span>
            <img src={eachUser.image} alt={eachUser.lastName} height="40px" width="40px"/>
        </div>
        </Link>
            )
        })}
    </div>
    }  
    
      </>
  )
}

export default Users