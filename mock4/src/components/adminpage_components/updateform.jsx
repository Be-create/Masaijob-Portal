import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Cookies from 'universal-cookie';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updatestate } from '../redux/action';
export default function Updateform(id) {
  let dispatch = useDispatch()

  const cookies = new Cookies();
  let [data,setdata]= React.useState({

    salary:"",

    
    role:"",
    
  
    location:"",

    time :   new Date().getDate()+"."+ new Date().getMonth()+"."+new Date().getFullYear(),

  })
  const handlesubmit = (id)=>{
    let token = cookies.get('token')
    console.log(data)

    try {
      fetch(`https://masaijobserver1.onrender.com/api/updatejob/?id=${id}`,{
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }
    })
    .then(()=>{
      fetch(` https://masaijobserver1.onrender.com/api/job`,{
          headers: {
            Authorization: `${token}`
          }
        })
        .then((res)=> res.json())
        .then((res)=>{//console.log(res.data)
          dispatch(updatestate(res.data))
          //console.log(temp)
        })
        } 
    )
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
      <InputLabel htmlFor="input-with-icon-adornment">
          Salary
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          value={data.salary}
          onChange={(e)=> {setdata({...data,salary: e.target.value })}}
        />
      
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Role
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          value={data.role}
          onChange={(e)=> {setdata({...data,role: e.target.value })}}
        />
      </FormControl>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Location" variant="standard"  value={data.location}
          onChange={(e)=> {setdata({...data,location: e.target.value })}} />
      </Box>
      <Button variant="contained" color="primary"  onClick={()=>{
       handlesubmit(id.id)
      }} >
          Post
        </Button>
    </Box>
    
  );
}