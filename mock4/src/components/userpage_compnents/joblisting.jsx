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
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
export  function Userjoblisting() {
    let [data,setdata]= useState([])
 let navigate = useNavigate()
 const cookies = new Cookies();
    useEffect(()=> {
    let token = cookies.get('token')
    if(token){
        fetch(` http://localhost:8080/api/job`,{
          headers: {
            Authorization: `${token}`
          }
        })
        .then((res)=> res.json())
        .then((res)=>{console.log(res.data)
        setdata(res.data)
        })
        .catch((err)=> console.log(err))
    
    }
    else{
      navigate("/register")
    }
},[])
  return data === [] ? <h1>Loading</h1> :(
    <div>
        <Grid container spacing={2}>
        {
            data.map((ele)=>
            <Grid item xs={8}>
    <Card key={ele._id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="50"
        width="50"
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4d9.svg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        { ele.companyname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ele.position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ele.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ele.contact}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
            
            
            )
        }
        </Grid>
    </div>
  );
}
