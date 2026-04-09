import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Schooloverview from './Pages/Schooloverview';
import Pageswebsite from './Pages/Pageswebsite';
import EditScreenweb from './Pages/EditScreenweb';
import  Messages from './Pages/Messages';



const RountingApp = () => {
    return ( <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/Schooloverview" element={<Schooloverview/>} />
        <Route path="/Pageswebsite" element={<Pageswebsite/>} />
        <Route path="/EditScreenweb" element={<EditScreenweb/>} />
        <Route path="/Messages" element={<Messages/>} />
  
     
       

    </Routes>
    </BrowserRouter>
    
    </>  );
}
 
export default RountingApp ;