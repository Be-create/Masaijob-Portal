import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from "@mui/material/Menu"
import Cookies from 'universal-cookie'

export const Navbar=()=>{
  let cookie = new Cookies()
let navigate = useNavigate()
function logout(){
cookie.remove("token")
navigate("/register")
}

    return(
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button variant="contained" sx={{margin:"10px"}} color="primary" ><Link to="/userpage" >Jobs</Link> 
        </Button>
          </Typography>
          <Typography>
          <Button variant="contained" sx={{margin:"10px"}} color="primary" ><Link to="/userpage/applied" >Applied Jobs</Link> 
        </Button>
          </Typography>
          <Typography>
          <Button variant="contained" sx={{margin:"10px"}} color="primary" onClick={logout} > LOGOUT
        </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
}