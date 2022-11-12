import "./styles.css";
import {
  
  TextField,
  Button,
} from "@mui/material";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Navbar } from "./navbar";
import { useState } from "react";
export default function Jobpost() {
  let [data,setdata]= useState({
    companyname : "",
    
    position:"",
    
    contact:"",
    
    
    location:""

  })
  const handlesubmit = ()=>{
    
    try {
      fetch(`http://localhost:8080/api/postjob`)
    } catch (error) {
      
    }
  }


  return (
    <div className="Jobpost">
     
<br></br>
      <form style={{ margin:"auto" , marginTop:"20vh"}}>
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Category"
          variant="outlined"
          onChange={(e)=> setdata({companyname:(e.target.value)})
          }
        />
        <br />
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Company-name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Role"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Job region"
          variant="outlined"
        />
        <br />
        <Button variant="contained" color="primary"  onClick={handlesubmit}  >
          Post
        </Button>
      </form>
    </div>
  );
}

