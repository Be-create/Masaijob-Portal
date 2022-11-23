import React, { useState } from "react";
import {Box, CardHeader, Input, OutlinedInput, TextField} from '@mui/material';
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./navbar";


export const Signup = ()=>{
    let [name,setname]= useState("")
    let [email,setemail]= useState("")
    let [password,setpassword]= useState("")
 let navigate = useNavigate()
 
    const register=()=>{
        let data ={
            name,
            email,
            password
        }
        fetch(`https://masaijobserver1.onrender.com/api/register`,{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        }).then((res )=> res.json())
        .then(()=> 
        navigate("/login")
        )
        
        .catch((err) => console.log("error", err))
    }

    return(
        <>
        <Navbar/>
        <Paper  elevation={3} style={{width:"fit-content" , height: " 50%", margin:"auto",textAlign:"center",marginTop:"20vh"}}>
    <CardHeader title="Sign up"></CardHeader>
    <form style={{ margin:"auto" }}
    >
     
        
     <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
        onChange={(e)=>{
          setname(e.target.value)
        }}
      />
      <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Email"
          variant="outlined"
      
      onChange={(e)=>{
        setemail(e.target.value)
      }}
      />
      <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Password"
          variant="outlined"
      
      onChange={(e)=>{
        setpassword(e.target.value)
      }}
      />
       <Button variant="contained" onClick={register} style={{display : "block",margin:"auto"}} >Submit</Button>
      
    </form>
    </Paper>
        </>
  );
}

       