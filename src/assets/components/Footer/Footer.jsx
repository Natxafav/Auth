import React from 'react'
import { Typography, Box } from '@mui/material'

const Footer = () => {
  return (
    <>
    <Box sx={{bottom:'0', position:'fixed', width:'100%' }}>
        <Typography variant='h6'>&copy;Reboot Academy 2024</Typography>
    </Box>
    </>
  )
}

export default Footer