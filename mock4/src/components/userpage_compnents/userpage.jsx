
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Userjoblisting } from './joblisting';
import { Navbar } from './navbar';
import { updatestate } from '../redux/action'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie';
import { Applied } from './appliedjob';
export  function Userpage() {
  let navigate = useNavigate()
 const cookies = new Cookies();
 let dispatch = useDispatch()
    // {let [data,setdata]= useState([])}
    useEffect(()=> {
    let token = cookies.get('token')
    if(token){
        try {
          fetch(` https://masaijobserver1.onrender.com/api/alljob`,{
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
      <>
      <Navbar/>

       <Routes>
        <Route path='/' element={<Userjoblisting/>}></Route>
        <Route path='/applied' element={<Applied/>}></Route>
       </Routes>
      
      </>
    )
 
    }