import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, CardHeader, Paper } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { margin } from "@mui/system";
import { Navbar } from "./navbar";
import Cookies from 'universal-cookie';
export const Signin = ()=>{
    let [name,setname]= useState("")
    let [email,setemail]= useState("")
    let [password,setpassword]= useState("")
    const cookies = new Cookies();
    let navigate = useNavigate()
    const register=()=>{
        let data ={
            name,
            email,
            password
        }
        fetch(` http://localhost:8080/api/login`,{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        }).then((res )=> res.json())
        .then((res)=> {
          cookies.set('token',`${res.token}`)
        console.log(cookies.get('token'));
            let domain= (res.data.email)
            console.log(domain)
            domain = domain.split("@")
            console.log(domain)
            if(domain[1]==="masaischool"){
           navigate("/adminpage")
            }
            else{
                navigate("/userpage")
            }
          
        })
        
        .catch((err) => console.log("error", err))
    }

    return(
        <>
        <Navbar/>
        <Paper elevation={3} style={{width:"fit-content" , height: " 50%", margin:"auto",textAlign:"center"}}>
            <h1>Sign in</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
        
        <TextField
        
          onChange={(e)=>{
            setname(e.target.value)
          }}
        />
        <TextField
        
        onChange={(e)=>{
          setemail(e.target.value)
        }}
        />
        <TextField
        onChange={(e)=>{
          setpassword(e.target.value)
        }}
        />
       <Button variant="contained" onClick={register} style={{display : "block",margin:"auto"}}  >Submit</Button>
      
    </Box>
    </Paper>
        </>
  );
}

       //muskan
       //muskan@masaischool
       //123456