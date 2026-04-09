import React from "react";
import Nav from "../Components/Layout/Nav";
import TitleandSub from "../Components/Layout/TitleandSub";
import EditSection from "../Components/Layout/EditSection";

import "./EditScreenweb.css";

const EditScreenweb = () => {
  return (
    <div className="home">
      
      <div className="layout">

        <Nav />

        <div className="content">
          <TitleandSub 
            title="Dashboard Overview" 
            subtitle="Welcome back" 
          />

          <EditSection />

        </div>

      </div>
    </div>
  );
};

export default EditScreenweb;