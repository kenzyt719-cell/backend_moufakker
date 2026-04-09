import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Schooloverview from './Pages/Schooloverview';


const RountingApp = () => {
    return ( <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/Schooloverview" element={<Schooloverview/>} />
  
     
        

    </Routes>
    </BrowserRouter>
    
    </>  );
}
 
export default RountingApp ;