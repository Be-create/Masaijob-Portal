
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { Signup } from './components/landingpage_components/signup';
import { Signin } from './components/landingpage_components/signin';
import { Userpage } from './components/userpage_compnents/userpage';
import { Adminpage } from './components/adminpage_components/adminpage';


function App() {
  return (
    <div className="App">
      <>
    <Routes>
    <Route
        path="/"
        element={<Signup />}
      />
      <Route
        path="/register/*"
        element={<Signup />}
      />
      <Route
        path="/login/*"
        element={<Signin />}
      />
      <Route
        path="/userpage/*"
        element={<Userpage />}
      />
      <Route
        path="/adminpage/*"
        element={<Adminpage />}
      />
    </Routes>
      </>
      
    </div>
  );
}

export default App;
