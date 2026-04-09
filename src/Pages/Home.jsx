import React from "react";
import Nav from "../Components/Layout/Nav";
import TitleandSub from "../Components/Layout/TitleandSub";
import Box1home from "../Components/Layout/Box1home";
import Boxmain01 from "../Components/Layout/Boxmain01";
import ClassPerformance from "../Components/Layout/ClassPerformance";
import ActiveUsers from "../Components/Layout/ActiveUsers";
import TrafficByWebsite from "../Components/Layout/TrafficByWebsite";
import StudentAlerts from "../Components/Layout/StudentAlerts";


import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="layout">

        <Nav />

        <div className="content">
          <TitleandSub 
            title="Dashboard Overview" 
            subtitle="Welcome back" 
          />

          <Boxmain01 />
          <Box1home />

             <div className="twodivs">
   <ActiveUsers />
   <ClassPerformance 
  title="Class Performance" 
  classes={[
    { name: "Math", students: 30, percentage: 75 },
    { name: "English", students: 25, percentage: 50 },
    { name: "Science", students: 20, percentage: 90 },
  ]}
/>
   

          </div>
       
          <div className="twodivs">
<ClassPerformance 
  title="Class Performance" 
  classes={[
    { name: "Math", students: 30, percentage: 75 },
    { name: "English", students: 25, percentage: 50 },
    { name: "Science", students: 20, percentage: 90 },
  ]}
/> 
       <TrafficByWebsite />

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

export default Home;