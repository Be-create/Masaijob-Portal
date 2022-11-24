import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Adminjoblisting } from './joblisting'
import  Jobpost  from './jobpost'
import { Navbar } from './navbar'
import Cookies from 'universal-cookie';
import { updatestate } from '../redux/action'
import { useDispatch } from 'react-redux'

export const Adminpage = ()=>{
    let navigate = useNavigate()
 const cookies = new Cookies();
 let dispatch = useDispatch()
    // {let [data,setdata]= useState([])}
    useEffect(()=> {
    let token = cookies.get('token')
    if(token){
        try {
          fetch(` https://masaijobserver1.onrender.com/api/job`,{
          headers: {
            Authorization: `${token}`
          }
        })
        .then((res)=> res.json())
        .then((res)=>{//console.log(res.data)
          dispatch(updatestate(res.data))
          //console.log(temp)
        })
        } catch (error) {
          console.log(error)
        }
       
    
    }
    else{
      navigate("/register")
    }
},[])
    return(
        <div >
        <Navbar/>
        <Routes>
            <Route path="/formpage" element={<Jobpost/>} />
            <Route path="/jobs" element={<Adminjoblisting/>} />
        </Routes>
        
        </div>
    )
}