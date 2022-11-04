import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./navbar";

export const Signup = ()=>{
    let [name,setname]= useState("")
    let [email,setemail]= useState("")
    let [password,setpassword]= useState("")
 let [domain,setdomain]= useState("") 
 let navigate = useNavigate()
    const register=()=>{
        let data ={
            name,
            email,
            password
        }
        fetch(`http://localhost:8080/api/register`,{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        }).then((res )=> res.json())
        .then((res)=> 
        navigate("/login")
        )
        
        .catch((err) => console.log("error", err))
    }

    return(
        <>
        <Navbar/>
        <Paper elevation={3} style={{width:"fit-content" , height: " 50%", margin:"auto",textAlign:"center"}}>
    <h1>Sign up</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
        
        <TextField
        style={{display : "block",margin:"20px"}}
          required
          id="filled-required"
          label="Required"
          defaultValue="Enter your name"
          variant="filled"
          onChange={(e)=>{
            setname(e.target.value)
          }}
        />
        <TextField
        style={{display : "block",margin:"20px"}}
          required
          id="filled-required"
          label="Required"
          defaultValue="Enter your email"
          variant="filled"
          onChange={(e)=>{
            setemail(e.target.value)
          }}
        />
        <TextField
        style={{display : "block",margin:"20px"}}
          id="filled-required"
          label="Required"
          defaultValue="Passord"
          
          variant="filled"
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
        />
       <Button variant="contained" onClick={register} style={{display : "block",margin:"auto"}} >Submit</Button>
      
    </Box>
    </Paper>
        </>
  );
}

       