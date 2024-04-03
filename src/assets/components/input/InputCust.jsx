import { TextField } from "@mui/material";
import React from "react";

const InputCust = ({ setTitle }) => {
  return (
    <>
      <TextField
        type="text"
        label="Change the title"
        sx={{ border: "inset 2px green", color: "white" }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></TextField>
    </>
  );
};

export default InputCust;
