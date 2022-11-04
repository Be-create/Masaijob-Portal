import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Userjoblisting } from './joblisting';
import { Navbar } from './navbar';

export  function Userpage() {
    return(
      <>
      <Navbar/>

      <Userjoblisting/>
      
      </>
    )
 
    }