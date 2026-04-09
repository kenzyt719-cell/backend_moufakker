import React from "react";
import Nav from "../Components/Layout/Nav";
import TitleandSub from "../Components/Layout/TitleandSub";
import Box1home from "../Components/Layout/Box1home";
import Boxmain01 from "../Components/Layout/Boxmain01";
import ClassPerformance from "../Components/Layout/ClassPerformance";
import ActiveUsers from "../Components/Layout/ActiveUsers";
import TrafficByWebsite from "../Components/Layout/TrafficByWebsite";
import StudentAlerts from "../Components/Layout/StudentAlerts";
import Msgdiv from "../Components/Layout/Msgdiv";


import "./Messages.css";

const Messages= () => {
  return (
    <div className="home">
      
      <div className="layout">

        <Nav />

        <div className="content">
          <TitleandSub 
            title="Messages" 
            subtitle="Welcome back" 
          />

       <Msgdiv />
        


        </div>

      </div>
    </div>
  );
};

export default Messages;