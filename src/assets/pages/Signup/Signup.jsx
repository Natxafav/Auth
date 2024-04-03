
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { signup } from "../../config/authService";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const navigate=useNavigate()


  const handleSignUp = async () => {
    const resp = await signup({
      email,
      name: { firstname, lastname },
      username,
      password,
    });
    console.log(resp)
    localStorage.setItem("token", resp.token);
    localStorage.setItem("role", resp.role);
    navigate('/home')
  };

  return (
    <div className="main">
      <Card sx={{ width: "40%" }}>
        <CardHeader title="Sign Up" />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", garp: "10px" }}
        >
          <TextField
            type="text"
            variant="outlined"
            label="Firstname"
            onChange={(e) => setFirstname(e.target.value)}
          ></TextField>
          <TextField
            type="text"
            variant="outlined"
            label="Lastname"
            onChange={(e) => setLastname(e.target.value)}
          ></TextField>
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            type="text"
            variant="outlined"
            label="UserName"
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant=" outlined" onClick={()=>handleSignUp()}>
            Sign Up
          </Button>
          <Button variant="outlined">Cancel</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Signup;
