import { InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputCust from '../../components/input/InputCust'

const Landing = () => {

  const [title, setTitle] = useState('')


  return (
    <>
    <div className="main">

    <Typography variant='h3'>{title}</Typography>
    
    <InputCust variant='1em' setTitle={setTitle}/>

  
    </div>
    
    
    </>
  )
}

export default Landing