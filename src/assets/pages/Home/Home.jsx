import React, { useContext } from 'react'

import { Typography } from '@mui/material'
import { NameContext } from '../../../context/UserContext'
const Home = () => {

  const {user}= useContext(NameContext)
  return (
    <>
    <div className="main">

    <Typography variant='h3'>Welcome Home {user.name && user.name['firstname']} </Typography>
    </div>
    
    
    </>
  )
}

export default Home