import React, { useEffect, useRef, useState } from 'react'
import Pill from './Pill';

const MultiSelect = () => {
    const [searchTerm, setSearhTerm] = useState("")
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedUserSet, setSelectedUserSet] = useState(new Set());
    const inputRef = useRef();
    useEffect(()=>{
        let timeId = setTimeout(() => {
            featchUsers();
        }, 2000);
        return(()=>{
            clearTimeout(timeId)
        })
    },[searchTerm])

    const featchUsers = () => {
        if(searchTerm.trim() === ""){
            setSearchSuggestions([])
            return;
        }
        fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res)=>res.json())
        .then((data)=>setSearchSuggestions(data))
        .catch((err)=>console.log(err));
    }

    const handleSelectedUsers = (user) =>{
        setSelectedUsers([...selectedUsers, user]);
        setSelectedUserSet(new Set([...selectedUserSet, user.email]))
        setSearhTerm("");
        setSearchSuggestions([])
        inputRef.current.focus();
    }

    // console.log(selectedUsers)

    const handleRemoveUser = (user) => {
        const updatedUsers = selectedUsers.filter((selectedUser)=>selectedUser.id !== user.id);
        setSelectedUsers(updatedUsers);
        const updatedEmails = new Set(selectedUserSet);
        updatedEmails.delete(user.email);
        setSelectedUserSet(updatedEmails)
    }

    const handleKeyDown = (e) => {
        if(e.key === "Backspace" && e.target.value === "" && selectedUsers.length > 0){
            const lastUser = selectedUsers[selectedUsers.length - 1];
            handleRemoveUser(lastUser);
            setSearchSuggestions([])

        }
    }

  return (
    <div className='user-search-container'>
        <div className='user-search-input'>
            {selectedUsers.map((user)=>{
                return(
                    <Pill key={user.email} image={user.image} text={user.firstName + user.lastName} onClick={()=>handleRemoveUser(user)}/>
                )
            })}
            <div>
                <input ref={inputRef} type="text" value={searchTerm} onChange={(e)=>{setSearhTerm(e.target.value)}} placeholder="seach user" onKeyDown={(e)=>{handleKeyDown(e)}}/>
                <ul className='suggestions-list'>
                    {searchSuggestions?.users?.map((eachUser, index)=>{
                        return !selectedUserSet.has(eachUser.email) ? (
                            <li key={eachUser.email} onClick={()=>handleSelectedUsers(eachUser)}>
                                <img src={eachUser.image} alt={`${eachUser.firstName}${eachUser.lastName}`}/>
                                <span>{eachUser.firstName}{eachUser.lastName}</span>
                            </li>
                        ) : <></>
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MultiSelect