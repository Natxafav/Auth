import React, { useContext, useEffect, useState } from "react";
import { getOne } from "../../config/userService";
import { NameContext } from "../../../context/UserContext";


const One = () => {
 
  const {user, setUser} = useContext(NameContext)


  const handleUser = async () => {
    const resp = await getOne();
    setUser(resp)
  };



  useEffect(() => {
    handleUser();
  }, []);

  return ( 
    <>
      <h1>One</h1>
      {user && (
        <>
         {
          user.name &&<>
          
          <p>{user.name.firstname}</p>
          <p>{user.name.lastname}</p>

          </>}
         
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </>
      )}
    </>
  );
};

export default One;
