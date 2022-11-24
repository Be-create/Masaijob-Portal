import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Filter from '../adminpage_components/Filter';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
export  function Userjoblisting() {
  let data = useSelector((state)=>state.jobs)
    console.log(data)
   
    let [page,setpage]=useState(1)
    let [showdata,setshowdata]=useState([])
    let count=10
useEffect(()=>{
  let start = page*20
  let end = start+20
  let temp1 = data.slice(start,end)
        setshowdata(temp1)
          console.log(temp1)
},[page,data])

  return showdata[0] == undefined ?  <Box sx={{ display: 'flex',width:"100vw" }}>
  <CircularProgress sx={{ margin:"auto"}} />
</Box>:(
    <div style={{ padding:"30px", display:"flex"}}>
     <Filter/>
        <div><Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
           showdata.map((ele)=>
            <Grid key={ele._id} item xs={4} sm={4} md={4} >
    <Card >
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
      <Button variant="contained" sx={{margin:"10px"}} color="primary">Apply
        </Button>
        <Button variant="contained" sx={{margin:"10px"}} color="primary">Bookmark
        </Button>
      </CardActions>
    </Card>
  </Grid>
            
            
            )
        }
        </Grid>

        <Pagination count={10} defaultPage={1} onChange={(e,page)=>{
        setpage(page)
    }}></Pagination></div>
    </div>
  );
}
