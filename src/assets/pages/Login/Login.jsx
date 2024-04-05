import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { login } from "../../config/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleLogin = async () => {
   
    const resp = await login({ email, password });
  
    console.log(resp)
    localStorage.setItem("token", resp.token);
    localStorage.setItem("role", resp.role);
    localStorage.setItem("username", resp.username);

    navigate("/home");
  };

  return (
    <div className="main">
      <Card sx={{ width: "40%" }}>
        <CardHeader title="Login" />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", garp: "10px" }}
        >
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>

          <TextField
            type="password"
            variant="outlined"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant=" outlined" onClick={() => handleLogin()}>
            Login
          </Button>
          <Button variant="outlined">Cancel</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
