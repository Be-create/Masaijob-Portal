import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/material/Menu";
import "../style.css";
export const Navbar = () => {
  return (
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
            Jobpost
          </Typography>
          <Button variant="contained" sx={{ margin: "10px" }} color="primary">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/register"
            >
              Register
            </Link>
          </Button>
          <Button variant="contained" sx={{ margin: "10px" }} color="primary">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
