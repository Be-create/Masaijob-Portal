import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Adminjoblisting } from './joblisting'
import  Jobpost  from './jobpost'
import { Navbar } from './navbar'


export const Adminpage = ()=>{
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/formpage" element={<Jobpost/>} />
            <Route path="/jobs" element={<Adminjoblisting/>} />
        </Routes>
        
        </>
    )
}