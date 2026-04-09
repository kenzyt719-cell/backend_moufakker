import React, { Component } from 'react';
import Nav from "../Components/Layout/Nav";
import NavTop from "../Components/Layout/NavTop";
import TitleandSub from "../Components/Layout/TitleandSub";
import  Box1home from "../Components/Layout/Box1home";

import  Boxmain01 from "../Components/Layout/Boxmain01";

import "./Home.css";

const Home = () => {
    return ( <>
    <div className='home'>
 {/* <NavTop />  */}
 <div className='marginedivss'>
 <Nav />
 <div className='margneleft'>
<TitleandSub 
  title="Dashboard Overview" 
  subtitle="Welcome back" 
/>
 <Boxmain01 />

<Box1home />
 </div>
 </div>











    </div>
     

    
    
    
    
    
    
    </> );
}
 
export default Home;