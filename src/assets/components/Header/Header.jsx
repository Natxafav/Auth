import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar
            sx={{ display: "flex", gap: "1em", justifyContent: "space-around" }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h3"> Demo</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "1em",
                justifyContent: "space-around",
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
              <Button variant="contaided" sx={{ marginLeft: "auto" }}>
                Login
              </Button>
              <Button variant="containded" sx={{ marginLeft: "auto" }}>
                SingUp
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
