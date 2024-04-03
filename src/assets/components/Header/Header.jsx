import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

const handleLogout=()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  navigate('/')
}


  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h3" sx={{ width: "20vw" }}>
         
              Demo
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "250px",
              }}
            >
              <Link to='/home'>
                <Typography variant="h6"> Home</Typography>
              </Link>
              <Link to='/all'>
                <Typography variant="h6"> All User</Typography>
              </Link>
              <Link to='/one'>
                <Typography variant="h6"> One User</Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "1em",
                justifyContent: "space-around",
              }}
            >
              {localStorage.getItem("token") ? (
                <Button variant="contaided" sx={{ marginLeft: "auto" }}
                onClick={()=>{handleLogout()}}>
                  Logout
                </Button>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="contaided" sx={{ marginLeft: "auto" }}>
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="containded" sx={{ marginLeft: "auto" }}>
                      SingUp
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
