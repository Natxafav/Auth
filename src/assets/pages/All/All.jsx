import React, { useState,useEffect } from 'react'
import { getAll } from '../../config/userService'

const All = () => {

const [users, setUsers]=useState([])

const handleUsers = async()=>{
    const resp = await getAll()
    console.log(resp)
    setUsers(resp)
}

useEffect(()=>{
    handleUsers()
},[])


  return (
    <>
        <h1>All</h1>
        {users && users.map((user, idx)=>{
            return (
                <div key={idx}>
                    <p>{user._id}</p>
                    <p>{user.username}</p>
                    <p>{user.role}</p>
                </div>
            )
        })}
    
    
    
    </>
  )
}

export default All