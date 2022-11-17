import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from "@mui/material/Menu"
import Searchbar from './Searchbar'

export const Navbar=()=>{
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
          </Typography>
        </Toolbar>
      </AppBar>

      <Searchbar/>
    </Box>
    )
}