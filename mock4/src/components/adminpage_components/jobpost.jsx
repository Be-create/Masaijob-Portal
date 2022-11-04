import "./styles.css";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box
} from "@mui/material";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Navbar } from "./navbar";
export default function Jobpost() {
  return (
    <div className="Jobpost">
     
<br></br>
      <form style={{ margin:"auto" , marginTop:"20vh"}}>
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
          label="Job description"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="Salary range"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "50%", margin: "5px" }}
          type="text"
          label="job region"
          variant="outlined"
        />
        <br />
        <Button variant="contained" color="primary">
          Post
        </Button>
      </form>
    </div>
  );
}

