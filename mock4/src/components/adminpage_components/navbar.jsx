import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from "@mui/material/Menu"
import Searchbar from './Searchbar'
import Cookies from 'universal-cookie'

export const Navbar=()=>{
let cookie = new Cookies()
let navigate = useNavigate()
function logout(){
cookie.remove("token")
navigate("/register")
}


    return(
<Box className='Joblist' sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:"transparent",color:"blue",boxShadow:"none",justifyContent:"space-evenly"}}>
        <Toolbar sx={{ color:"white"}}>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
           
ADMIN
           
          </Typography>
          <Typography>
          <Button  variant="contained" sx={{margin:"10px"}} color="primary" ><Link style={{ textDecoration:"none",color:"white"}} to="formpage">Post a job</Link> 
        </Button>
        <Button variant="contained" sx={{margin:"10px"}} color="primary"><Link style={{ textDecoration:"none",color:"white"}} to="jobs">Jobs</Link> 
        </Button>
        <Button variant="contained" sx={{margin:"10px"}} color="primary" onClick={logout} > LOGOUT
        </Button>
          </Typography>
        </Toolbar>
      </AppBar>

      <Searchbar/>
    </Box>
    )
}