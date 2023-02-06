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
import Sort from './Sort';
import CircularProgress from '@mui/material/CircularProgress';
import PopoverPopupState from './updatePop';
import BasicPopover from './updatePop';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateState } from '../redux/actiontype';
import { updatestate } from '../redux/action';
export function Adminjoblisting() {
  // {let [data,setdata]= useState([])}
  let data = useSelector((state) => state.jobs)
  let dispatch = useDispatch()
  console.log(data)
  let [page, setpage] = useState(1)
  let [showdata, setshowdata] = useState([])
  let [count, setcount] = useState(0)
  let navigate = useNavigate()
let cookies = new Cookies()
  //apply pagination
 
  useEffect(() => {
    if(data.length<=5) setshowdata(data);
    else{
      
      let temp = Math.ceil(data.length / 5);
      console.log(temp)
    setcount(temp);
    let start = (page-1) * 5;
   let end = start+5;
   if(data[end-1]===null){
    end = data.length
   }
    let temp1 = data.slice(start, end)
    setshowdata(temp1)
  }
   
    // console.log(temp1)
  }, [page, data])


//Delete job post

const DeleteJob =(id)=>{
  //console.log(id)
let temp =  data.Sort((key)=>key._id!==id)
 dispatch(updatestate(temp))

  let token = cookies.get('token')
  try {
    fetch(`https://masaijobserver1.onrender.com/api/deletejob/?id=${id}`,{
      method: "Delete",
      headers:{
          "Authorization": `${token}`
      }
  })
  } catch (error) {
    console.log(error)
  }
}



  return showdata[0] == undefined ? <Box sx={{ display: 'flex', width: "100vw" }}>
    <CircularProgress sx={{ margin: "auto" }} />
  </Box> : (
    <div style={{ padding: "30px", display: "flex" }}>
      <Sort />
      <div><Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          showdata.map((ele) =>
            <Grid key={ele._id} >
              <Card raised sx={{ margin:"20px"}}>
                <CardMedia
                  component="img"
                  height="50"
                  width="50"
                  src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4d9.svg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {ele.companyname}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ele.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ele.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date posted  {ele.time}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {ele.salary} LPA
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" sx={{ margin: "10px" }} color="primary" onClick={()=>DeleteJob(ele._id)}>DELETE
                  </Button>
                  <Button size="small">
                    <BasicPopover buttonid={ele._id} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>


          )
        }
      </Grid>

        <Pagination count={count} defaultPage={1} onChange={(e, page) => {
          setpage(page)
        }}></Pagination></div>
    </div>
  );
}
