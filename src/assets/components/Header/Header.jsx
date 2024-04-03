import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box>
        <AppBar position="static" >
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between" }}
          >           
              <Typography variant="h3" sx={{width:'20vw'}}> Demo</Typography>
        
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width:'250px'
              }}
            >
              <Link>
                <Typography variant="h6"> Home</Typography>
              </Link>
              <Link>
                <Typography variant="h6"> All User</Typography>
              </Link>
              <Link>
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
              <Link to='/login'>
              <Button variant="contaided" sx={{ marginLeft: "auto" }}>
                Login
              </Button>
              </Link>
              <Link to='/signup'>
              <Button variant="containded" sx={{ marginLeft: "auto" }}>
                SingUp
              </Button>
              </Link>

            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
