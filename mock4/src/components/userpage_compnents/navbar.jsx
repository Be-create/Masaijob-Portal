import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from "@mui/material/Menu"

export const Navbar=()=>{
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
            News
          </Typography>
          <Button color="inherit"><Link to="/register">Register</Link> 
        </Button>
        <Button color="inherit"><Link to="/login">Login</Link> 
        </Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}