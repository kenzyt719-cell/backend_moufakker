import React from "react";
import Nav from "../Components/Layout/Nav";
import TitleandSub from "../Components/Layout/TitleandSub";
import Box1home from "../Components/Layout/Box1home";
import Boxmain01 from "../Components/Layout/Boxmain01";
import ClassPerformance from "../Components/Layout/ClassPerformance";
import ActiveUsers from "../Components/Layout/ActiveUsers";
import TrafficByWebsite from "../Components/Layout/TrafficByWebsite";
import StudentAlerts from "../Components/Layout/StudentAlerts";
import schoolImg from "../Assets/school.png"; 
import ClassStats from "../Components/Layout/ClassStats";


import "./Schooloverview.css";

const Schooloverview = () => {
  return (
    <div className="home">
      <div className="layout">

        <Nav />

        <div className="content">
          <TitleandSub 
            title="School Overview" 
            subtitle="Complete statistics and insights for the entire schools" 
          />

          <div className="schoolinfo">
            
             <div className="twodivs">
                <div className="divimg">
<img src={schoolImg} alt="Cairo International School" className="school-img" />                </div>
                <div>
                    <h1 className="h1divschool">Cairo International School</h1>
                    <h2 className="h2divschool">Governmental School • Est. 1985</h2>
                    <h2 className="h3divschool">District: Nasr City. School Code: CIS-2024. Academic Year: 2025-2026</h2>
                </div>
  

          </div> </div>
          <ClassStats />

        

       
         

  <div className="twodivs">
   <StudentAlerts />
          <StudentAlerts />
</div>
       

  <div className="twodivs">
   <StudentAlerts />
          <StudentAlerts />
</div>
       

        </div>

      </div>
    </div>
  );
};

export default Schooloverview;