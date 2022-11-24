import "../style.css";
import {
  
  TextField,
  Button,
} from "@mui/material";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Navbar } from "./navbar";
import { useState } from "react";
import Cookies from 'universal-cookie';
export default function Jobpost() {
  const cookies = new Cookies();
  let [data,setdata]= useState({
    category:"",

    salary:"",

    companyname : "",
    
    role:"",
    
  
    location:"",

    time :   new Date().getDate()+"."+ new Date().getMonth()+"."+new Date().getFullYear(),

  })
  const handlesubmit = ()=>{
    let token = cookies.get('token')
    console.log(data)

    try {
      fetch(`http://localhost:8080/api/postjob`,{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }
    })
    } catch (error) {
      console.log(error)
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
          value={data.category}
          onChange={(e)=> {setdata({...data,category: e.target.value })
                              
        }
          }
        />
        <br />
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="Number"
          label="Salary"
          variant="outlined"
          value={data.salary}
          onChange={(e)=> {setdata({...data,salary: e.target.value })
                               
        }
          }
        />
        <br />
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Company-name"
          variant="outlined"
          value={data.companyname}
          onChange={(e)=> setdata({...data,companyname: e.target.value})
        }
        />
        <br />
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Role"
          variant="outlined"
          value={data.role}
          onChange={(e)=> setdata({...data,role: e.target.value })}
        />
        <br />
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Job region"
          variant="outlined"
          value={data.location}
          onChange={(e)=> setdata({...data,location: e.target.value})}
        />
        <br />
        <Button variant="contained" color="primary"  onClick={handlesubmit} >
          Post
        </Button>
      </form>
      
    </div>
  );
}

